import React from "react";
import "./Hero.css";
import { useSelector } from "react-redux";

const Hero = () =>{

    const { hero } = useSelector(state => state.hero)

  return (
    <div className="container-hero">
      <div className="contact">
        <h1> {hero.name}</h1>
        <p className="direccion"> {hero.adress}</p>
        <p className="direccion"> {hero.city} </p>
        <p> {hero.email} </p>
        <p> {hero.phone} </p>
        <p> {hero.birdDate} </p>
        <p> {hero.gitHub} </p>
      </div>
      <div className="imagen">
        <img src={hero.image} alt={hero.name}></img>
      </div>
    </div>
  );
};

export default Hero;
