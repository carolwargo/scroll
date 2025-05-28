import { useState } from "react";
import { emailDataTemplate } from "../data/emailData";

export default function EmailComponent() {


  return (
    <div
      className="bg-light py-md-3 px-md-0 d-flex flex-column justify-content-center align-items-center"
      id="email-samples"
      style={{ minHeight: "50vh" }}
    >
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 justify-content-center">
  
          <div className="col-sm-12 col-md-4 col-lg-4 w3-padding-small">
              <img
                src={Newsletter3}
                className="card-img-top"
                alt='diagram email campaign sample' 
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
    </div>
  );
}
