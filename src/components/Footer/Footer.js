import React from "react";
import "./Footer.css";
import Footerlogo from "../../Assets/Footer-logo.svg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col">
            <img className="footer-icon" src={Footerlogo} alt="" />
            <p>
              Ramcha est une application tout-en-un qui met en relation les
              propriétaires avec une variété de services répondant à leurs
              besoins domestiques. Que ce soit pour les services électriques,
              les solutions de plomberie ou d'autres tâches essentielles, Ramcha
              a tout couvert. Dites adieu au stress de la recherche de
              professionnels fiables et accueillez la convivialité de la
              plateforme Ramcha.
            </p>
          </div>
          <div className="col">
            <h3>Téléchargez l'application</h3>
            <div className="app-links">
            <a
                href="https://www.apple.com/store"
                target="_blank"
              >
                <AiFillApple className="social-icon" />
              </a>
              <a
                href="https://play.google.com/store/games?hl=fr"
                target="_blank"
              >
                <AiFillAndroid className="social-icon" />
              </a>
              </div>
          </div>
          <div className="col">
            <h3>Reseau Sociaux</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=100095040094978"
                target="_blank"
              >
                <AiFillFacebook className="social-icon" />
              </a>
              <a href="https://www.instagram.com/ramchaapp/" target="_blank">
                <AiFillInstagram className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramcha-app-641028284/"
                target="_blank"
              >
                <AiFillLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          <div className="col">
            <h3>Contactez-nous</h3>
            <h5>Contact@Ramcha.net</h5>
            <br />
            <p>Imm Zarrouk, 19Av, Abou Hamed Ghazeli .4002.Sousse</p>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright © 2023 Ramcha</p>
      </footer>
    </>
  );
};

export default Footer;
