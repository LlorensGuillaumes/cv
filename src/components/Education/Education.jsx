import React from "react";
import "./Education.css";

const Education = ({ educacion }) => {
  return (
    <div className = "container-courses">
          <div className="courses title">
            <p className="course-item"> FORMACIÓN </p>
            <p className="course-item"> CENTRO </p>
            <p className="course-item"> AÑO </p>
            </div>
      {educacion.map((item, index) => {
        return (
          <div key={index} className="courses">
            <p className="course-item bold"> {item.name} </p>
            <p className="course-item"> {item.where} </p>
            <p className="course-item"> {item.date} </p>
          </div>
        );
      })}
    </div>
  );
};
export default Education;
