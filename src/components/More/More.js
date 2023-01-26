import React from "react";
import "./More.css";

const More = ({ habilities, languages, volunteer }) => {
  return (
    <div>
      {volunteer.map((item, index) => {
        return (
          <div key={index} className ="volunteer">
            <h3> {item.name}</h3>
            <h4> {item.where}</h4>
            <h4> {item.description}</h4>
          </div>
        );
      })}

      {languages.map((item, index) => {
        return (
          <div key={index} className="languages">
            <h3> {item.language}</h3>
            <h4> Hablado: {item.splevel}</h4>
            <h4> Escrito: {item.wrlevel}</h4>
          </div>
        );
      })}

      {habilities.map((item, index) => {
        return (
          <div key={index} className="habilities">
            <h3> {item}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default More;

//<More habilities={habilities} languages={languages} vounteer={volunteer}/>
