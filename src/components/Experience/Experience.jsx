import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div className="container-experience">
      <div className="experiences title">
      <p className="experience-item">FECHA</p>
        <p className="experience-item">TRABAJO</p>        
        <p className="experience-item">EMPRESA</p>
      </div>

      {experience.map((item, index) => {
        return (
          <div key={`${item.name}-${item.description}`} className="container-item_list">
            <div className="experiences">
              <p className="bold experience-item ">{item.date}</p>
              <div className="experiences2">
              <p className="bold experience-item ">{item.name}</p>
              <p className="experience-item2">{item.description}</p>
              </div>
              <p className="experience-item">{item.where}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
