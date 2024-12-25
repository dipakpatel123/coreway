import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 import "../assets/CSS/HeroSection.css"

const HeroSection = () => {
  return (
        <div className="fit">
    <div className="hero-section">
     
        <div className="row">
          <div className="col-md-6 text-light text-overlay">
            <p className="small">THE NEW</p>
            <h1 className="display-4 fw-bold">THE UNIQUE MAKE THAT FITS YOUR STYLE</h1>
            <p>Always look for in a world-class diamond!</p>
            <a href="#" className="btn btn-light btn-lg">EXPLORE NOW</a>
          </div>
        </div>
       
    </div>
    </div>
  );
};

export default HeroSection;
