import React from "react";
import HeroLeft from "../../Assets/Hero1.png";
import HeroRight from "../../Assets/Hero2.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div
        className=" d-flex align-content-center container"
        style={{ minHeight: "90vh", alignItems: "center" }}
      >
        <div className=" row justify-content-center">
          <div className=" col-lg-6 col-sm-12  ">
            <img className="img-fluid" src={HeroLeft} alt="" />
          </div>
          <div className=" col-lg-6 col-sm-12">
            <img className="img-fluid" src={HeroRight} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
