// src/components/Sports.jsx
import { useState } from "react";
import {sportsDataTemplate} from '../data/sportsData';  
import Catching from '../assets/images/Sports/Catching.png';
import Canceled from '../assets/images/Sports/Canceled.png';
import CuttersFlyers from '../assets/images/Sports/CuttersFlyers.png';

import "bootstrap/dist/css/bootstrap.min.css";



export default function Sports() {

    const [currentDukeIndex, setCurrentDukeIndex] = useState(0);
    const [currentCCUIndex, setCurrentCCUIndex] = useState(0);
const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
    const [currentSportsIndex, setCurrentSportsIndex] = useState(0);

const handleDukemageClick = (index) => setCurrentDukeIndex(index);
const handlePackageImageClick = (index) => setCurrentPackageIndex(index); 
  const handleCCUImageClick = (index) => setCurrentCCUIndex(index);
    const handleSportsImageClick = (index) => setCurrentSportsIndex(index);

    const sportsData = [
        {
            name: "Duke",
            images: sportsDataTemplate.dukeImages,
            index: currentDukeIndex,
            handler: handleDukemageClick,
        },

        {
            name: "CCU",
            images: sportsDataTemplate.ccuImages,
            index: currentCCUIndex,
            handler: handleCCUImageClick,
        },



        {
            name: "Sports",
            images: sportsDataTemplate.sportsImages,
            index: currentSportsIndex,
            handler: handleSportsImageClick,
        },

             {
          name: "NHS",
          images: sportsDataTemplate.nhsImages,
          index: currentPackageIndex,
          handler: handlePackageImageClick,
        },
        
    
    ];

  return (
    <div
      className="bg-light py-md-3 px-md-0 d-flex flex-column justify-content-center align-items-center mb-5"
      id="sports-samples"
      style={{ minHeight: '50vh' }}
    >
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4 justify-content-center">
          {sportsData.map((category) => (
            <div className="col" key={category.name}>
              <div className="card shadow-sm h-100">
                <img
                  src={category.images[category.index]}
                  className="card-img-top"
                  alt={`${category.name} sports campaign sample`}
                  loading="lazy"
                />
                <div className="card-body d-flex justify-content-center align-items-center py-2">
                  <div className="d-flex align-items-center gap-4">
                    {category.images.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => category.handler(index)}
                        style={{
                          borderRadius: '50%',
                          width: '10px',
                          height: '10px',
                          cursor: 'pointer',
                          backgroundColor: index === category.index ? '#FF385C' : '#d3d3d3',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        
          <div className="p-2">
                <img src={Catching} alt="catching" style={{width:'100%'}} className="rounded mt-2"/>
     </div>
          <div className="p-2">
                <img src={Canceled} alt="canceled flyer" style={{width:'100%'}} className="rounded mt-2"/>
           </div>
                 <div className="p-2">
                       <img src={CuttersFlyers} alt="cutters special event media" style={{width:'100%'}} className="rounded mt-2"/>
                  </div>      
        </div>

        
      </div>
  );
}

/*import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Catching from "../../assets/images/Graphics/Catching.png";
import Canceled from "../../assets/images/Graphics/Canceled.png";
import CuttersFlyers from "../../assets/images/Graphics/CuttersFlyers.png";
import S1 from "../../assets/images/Sports/S1.png";
import S2 from "../../assets/images/Sports/S2.png";
import S4 from "../../assets/images/Sports/S4.png";
import CCU1 from "../../assets/images/Graphics/CCU1.png";
import CCU2 from "../../assets/images/Graphics/CCU2.png";
import Duke1 from "../../assets/images/WallPaper/Duke1.png";
import Duke2 from "../../assets/images/WallPaper/Duke2.png";
import Duke3 from "../../assets/images/WallPaper/Duke3.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const dukeImages = [Duke1, Duke2, Duke3];
const ccuImages = [CCU1, CCU2];

const sportsImages = [Catching, Canceled, CuttersFlyers, S1, S2, S4];

export default function SportsComponent() {
  const [currentDukeIndex, setCurrentDukeIndex] = React.useState(0);
  const [currentCCUIndex, setCurrentCCUIndex] = React.useState(0);
  const [currentSportsIndex, setCurrentSportsIndex] = React.useState(0);

  const handleDukeImageClick = (index) => {
    setCurrentDukeIndex(index);
  };

  const handleCCUImageClick = (index) => {
    setCurrentCCUIndex(index);
  };

  const handleSportsImageClick = (index) => {
    setCurrentSportsIndex(index);
  };

  return (
    <div className="social" id="social">
      <div className="bg-secondary-subtle p-5">
        <div className="p-5 text-center ">
          <h1 className="fw-bold text-primary">
            <i className="fw-bold">SPORTS MEDIA CAMPAIGN SAMPLES</i>
          </h1>
          <h4>
            {" "}
            Enhance your social media presence with our vibrant and impactful
            graphics, tailored to catch the eye and engage your followers across
            all platforms.
          </h4>
        </div>

        <div className="p-5">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-12 col-lg-12 w3-padding-small ">
              <Card
                className="shadow my-1"
                variant="outlined"
                sx={{
                  minWidth: 225,
                  "--Card-radius": (theme) => theme.vars.radius.xs,
                }}
              >
                <img
                  src={sportsImages[currentSportsIndex]}
                  className="w-100"
                  alt=""
                  loading="lazy"
                />

                <CardContent
                  orientation="horizontal"
                  sx={{ alignItems: "center", mx: -1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mx: "auto",
                    }}
                  >
                    {sportsImages.map((_, index) => (
                      <Box
                        className="shadow my-4"
                        key={index}
                        onClick={() => handleSportsImageClick(index)}
                        sx={{
                          borderRadius: "50%",
                          width: "10px",
                          height: "10px",
                          cursor: "pointer",
                          bgcolor:
                            index === currentSportsIndex
                              ? "primary.solidBg"
                              : "background.level3",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-small ">
              <Card
                className="shadow my-1"
                variant="outlined"
                sx={{
                  minWidth: 225,
                  "--Card-radius": (theme) => theme.vars.radius.xs,
                }}
              >
                <img
                  src={ccuImages[currentCCUIndex]}
                  className="w-100 w3-padding"
                  alt=""
                  loading="lazy"
                />

                <CardContent
                  orientation="horizontal"
                  sx={{ alignItems: "center", mx: -1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mx: "auto",
                    }}
                  >
                    {dukeImages.map((_, index) => (
                      <Box
                        className="shadow my-6"
                        key={index}
                        onClick={() => handleCCUImageClick(index)}
                        sx={{
                          borderRadius: "50%",
                          width: "10px",
                          height: "10px",
                          cursor: "pointer",
                          bgcolor:
                            index === currentCCUIndex
                              ? "primary.solidBg"
                              : "background.level3",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-small ">
              <Card
                className="shadow my-1"
                variant="outlined"
                sx={{
                  minWidth: 225,
                  "--Card-radius": (theme) => theme.vars.radius.xs,
                }}
              >
                <img
                  src={dukeImages[currentDukeIndex]}
                  className="w-100 w3-padding"
                  alt=""
                  loading="lazy"
                />

                <CardContent
                  orientation="horizontal"
                  sx={{ alignItems: "center", mx: -1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      mx: "auto",
                    }}
                  >
                    {dukeImages.map((_, index) => (
                      <Box
                        className="shadow my-6"
                        key={index}
                        onClick={() => handleDukeImageClick(index)}
                        sx={{
                          borderRadius: "50%",
                          width: "10px",
                          height: "10px",
                          cursor: "pointer",
                          bgcolor:
                            index === currentDukeIndex
                              ? "primary.solidBg"
                              : "background.level3",
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/



/**
 *         <div className="container p-4">   
        <div className="row d-flex justify-content-center align-items-center">
<div className="col-sm-12 col-md-12 col-lg-12 w3-padding-small ">
            <Card
            className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={sportsImages[currentSportsIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {sportsImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleSportsImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentSportsIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>   
       </div>
       <div className="row d-flex justify-content-center align-items-center">

            <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-small ">
            <Card
                 className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={ccuImages[currentCCUIndex]} className='w-100 w3-padding' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {dukeImages.map((_, index) => (
            <Box
            className="shadow my-6"
              key={index}
              onClick={() => handleCCUImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentCCUIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6 w3-padding-small ">
            <Card
                 className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={dukeImages[currentDukeIndex]} className='w-100 w3-padding' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {dukeImages.map((_, index) => (
            <Box
            className="shadow my-6"
              key={index}
              onClick={() => handleDukeImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentDukeIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
                </div>  
       </div>
       </div>
 */