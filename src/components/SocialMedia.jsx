// srrc/components/SocialMedia.jsx

import { useState } from "react";
import {socialDataTemplate } from "../data/socialData";
import YogaSet from "../assets/images/YogaStory/YogaSet.png";   


export default function Social() {
const [currentFruitIndex, setCurrentFruitIndex] = useState(0);
const [currentGreenFoodIndex, setCurrentGreenFoodIndex] = useState(0);
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);
 const [currentTravelIndex, setCurrentTravelIndex] = useState(0);
const [currentOpenIndex, setCurrentOpenIndex] = useState(0);

  const handleFruitImageClick = (index) => setCurrentFruitIndex(index);
    const handleFoodImageClick = (index) => setCurrentFoodIndex(index);
    const handleTravelImageClick = (index) => setCurrentTravelIndex(index);
    const handleOpenImageClick = (index) => setCurrentOpenIndex(index);
    const handleGreenFoodImageClick = (index) => setCurrentGreenFoodIndex(index);

  const socialData = [
    {
      name: "Fruit",
      images: socialDataTemplate.fruitImages,
      index: currentFruitIndex,
      handler: handleFruitImageClick,
    },
      {
      name: "Greenfood",
        images: socialDataTemplate.greenfoodImages,
        index: currentGreenFoodIndex,
        handler: handleGreenFoodImageClick,
    },
    {
      name: "Food",
      images: socialDataTemplate.foodImages,
      index: currentFoodIndex,
      handler: handleFoodImageClick,
    },
    {
      name: "Open",
        images: socialDataTemplate.openImages,
        index: currentOpenIndex,
        handler: handleOpenImageClick,
    },
    {
      name: "Travel",   
        images: socialDataTemplate.travelImages,
        index: currentTravelIndex,
        handler: handleTravelImageClick,
    },
  ];

  return (
    <div
      className="bg-light py-md-3 px-md-0 d-flex flex-column justify-content-center align-items-center"
      id="social-samples"
      style={{ minHeight: "50vh" }}
    >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
       
       
        {socialData.map((category) => (
          <div className="col" key={category.name}>
            <div className="card shadow-sm h-100">
              <img
                src={category.images[category.index]}
                className="card-img-top"
                alt={`${category.name} social campaign sample`}
                loading="lazy"
              />
              <div className="card-body d-flex justify-content-center align-items-center py-2">
                <div className="d-flex align-items-center gap-4">
                  {category.images.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => category.handler(index)}
                      style={{
                        borderRadius: "50%",
                        width: "10px",
                        height: "10px",
                        cursor: "pointer",
                        backgroundColor:
                          index === category.index ? "#FF385C" : "#d3d3d3",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
         <div className="my-4">
            <img src={YogaSet} alt="yoga" style={{width:'100%'}} className="rounded mt-2"/>
       </div>
    </div>
  );
}

 


