import React from "react";
import "./About.css";
import aboutImg from "../../Assets/About.svg";

const About = () => {
  return (
    <>
      <section id="A propos">
        <h2 className="about-title">À propos de nous</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-container-left">
                <p>
                  Ramcha est une application tout-en-un qui met en relation les
                  propriétaires avec une variété de services répondant à leurs
                  besoins domestiques. Que ce soit pour les services
                  électriques, les solutions de plomberie ou d'autres tâches
                  essentielles, Ramcha a tout couvert. Dites adieu au stress de
                  la recherche de professionnels fiables et accueillez la
                  convivialité de la plateforme Ramcha.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-container-right">
                <img src={aboutImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

