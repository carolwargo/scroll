import { useState } from "react";
import { emailDataTemplate } from "../data/emailData";

export default function EmailComponent() {
  const [currentBusinessIndex, setCurrentBusinessIndex] = useState(0);
  const [currentFitnessIndex, setCurrentFitnessIndex] = useState(0);
  const [currentFurnitureIndex, setCurrentFurnitureIndex] = useState(0);
  const [currentAgencyIndex, setCurrentAgencyIndex] = useState(0);
  const [currentFinanceIndex, setCurrentFinanceIndex] = useState(0);
  const [currentDesignIndex, setCurrentDesignIndex] = useState(0);
  const [currentIslandIndex, setCurrentIslandIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleBusinessImageClick = (index) => setCurrentBusinessIndex(index);
  const handleFitnessImageClick = (index) => setCurrentFitnessIndex(index);
  const handleFurnitureImageClick = (index) => setCurrentFurnitureIndex(index);
  const handleAgencyImageClick = (index) => setCurrentAgencyIndex(index);
  const handleFinanceImageClick = (index) => setCurrentFinanceIndex(index);
  const handleDesignImageClick = (index) => setCurrentDesignIndex(index);
  const handleIslandImageClick = (index) => setCurrentIslandIndex(index);
  const handlePhotoImageClick = (index) => setCurrentPhotoIndex(index);

  const emailData = [
    {
      name: "Business",
      images: emailDataTemplate.businessImages,
      index: currentBusinessIndex,
      handler: handleBusinessImageClick,
    },
    {
      name: "Finance",
      images: emailDataTemplate.financeImages,
      index: currentFinanceIndex,
      handler: handleFinanceImageClick,
    },
    {
      name: "Design",
      images: emailDataTemplate.designImages,
      index: currentDesignIndex,
      handler: handleDesignImageClick,
    },
    {
      name: "Island",
      images: emailDataTemplate.islandImages,
      index: currentIslandIndex,
      handler: handleIslandImageClick,
    },
    {
      name: "Photo",
      images: emailDataTemplate.photoImages,
      index: currentPhotoIndex,
      handler: handlePhotoImageClick,
    },
    {
      name: "Fitness",
      images: emailDataTemplate.fitnessImages,
      index: currentFitnessIndex,
      handler: handleFitnessImageClick,
    },
    {
      name: "Furniture",
      images: emailDataTemplate.furnitureImages,
      index: currentFurnitureIndex,
      handler: handleFurnitureImageClick,
    },
    {
      name: "Agency",
      images: emailDataTemplate.agencyImages,
      index: currentAgencyIndex,
      handler: handleAgencyImageClick,
    },
  ];

  return (
        <div style={{borderBottom: '2px solid #4a016c'}}>
    <div
      className="bg-light py-md-3 px-md-0 d-flex flex-column justify-content-center align-items-center mb-4"
      id="email-samples"
      style={{ minHeight: "50vh" }}
    >
  
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
        {emailData.map((category) => (
          <div className="col" key={category.name}>
            <div className="card shadow-sm h-100">
              <img
                src={category.images[category.index]}
                className="card-img-top"
                alt={`${category.name} email campaign sample`}
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
      </div>
    </div>
  );
}
