// src/components/Graphics/InfographicComponent.jsx
import { infoDataTemplate } from "../data/infoData";

function Infographic() {
  const { typoImages, infoImages } = infoDataTemplate;

  return (
    <div className='infos' id="infos">
      <div className="mt-4"> 
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center'>    

          {/* Map typo images */}
          {typoImages.map((img, index) => (
            <div className="col" key={`typo-${index}`}>
              <img src={img} alt={`typo${index + 1}`} className="w-100 rounded-2 shadow" />
            </div>
          ))}

          {/* Map infographic images */}
          {infoImages.map((img, index) => (
            <div className="col" key={`info-${index}`}>
              <img src={img} alt={`info${index + 2}`} className="w-100 rounded-2 shadow" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Infographic;






/**
 * // src/components/Graphics/InfographicComponent.jsx
import { useState } from "react";
import { infoDataTemplate } from "../data/infoData";

export default function InfoComponent() {
const [currentTypoIndex, setCurrentTypoIndex] = useState(0);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);
  
  const handleTypoImageClick = (index) => setCurrentTypoIndex(index);
  const handleInfoImageClick = (index) => setCurrentInfoIndex(index);
  
  const infoData = [
    {
      name: "Typo",
      images: infoDataTemplate.typoImages,
      index: currentTypoIndex,
      handler: handleTypoImageClick,
    },
    {
      name: "Info",
      images: infoDataTemplate.financeImages,
      index: currentInfoIndex,
      handler: handleInfoImageClick,
    },
  ];


  return (
    <div
      className="bg-light py-md-3 px-2 px-md-0 d-flex flex-column justify-content-center align-items-center"
      id="info-samples"
      style={{ minHeight: "50vh" }}
    >
      <style>
        {`
     
.slick-prev, .slick-next {
  font-size: 0;
  background-color: transparent;
  border: none;
  outline: none;
}

.slick-prev::before, .slick-next::before {
  font-size: 30px;
  color: #000000; 
  shadow: 0 0 10px #000;

.slick-prev:hover::before, .slick-next:hover::before {
  color: #00ff00; 
  `}
      </style>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
        {infoData.map((category) => (
          <div className="col" key={category.name}>
            <div className="card shadow-sm h-100">
              <img
                src={category.images[category.index]}
                className="card-img-top"
                alt={`${category.name} email campaign sample`}
                loading="lazy"
              />
              <div className="card-body d-flex justify-content-center align-items-center py-2">
                <div className="d-flex align-items-center gap-2">
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
    </div>
  );
}

 */