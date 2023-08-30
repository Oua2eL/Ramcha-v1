import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar-bg d-flex justify-content-center ">
      <div className="sb__navbar " style={{ width: "100%" }}>
        <div className="sb__navbar-links">
          <div className="sb__navbar-links_logo">
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="sb__navbar-links_container">
            <p>
              <a href="#A propos">Àpropos</a>
            </p>
            <p>
              <a href="#Avantage">Avantage</a>
            </p>
            <p>
              <a href="#Service">Service</a>
            </p>
            <p>
              <a href="#Login">S'inscrire</a>
            </p>
            <p>
              <a href="/Conexion">Déconnexion</a>
            </p>
          </div>
        </div>
        <div className="sb__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="sb__navbar-menu_container scale-up-center">
              <div className="sb__navbar-menu_container-links">
                <p>
                  <a href="#A propos">Àpropos</a>
                </p>
                <p>
                  <a href="#Service">Service</a>
                </p>
                <p>
                  <a href="#Avantage">Avantage</a>
                </p>
                <p>
                  <a href="#Login">S'inscrire</a>
                </p>
                <p>
                  <a href="/Conexion">Déconnexion</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
