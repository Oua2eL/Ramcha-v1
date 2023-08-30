import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Testimonial from "./components/Testimonial/Testimonial";
import Card from "./components/Card/Card";
import Avantage from "./components/Avantage/Avantage";
import Login from "./components/Login/Login";
import Service from "./components/Service/Service";


const App = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Hero />
        <About />
        <Card />
        <Avantage />
        <Service />
        <Testimonial />
        <Login />
      </div>
      <Footer />
    </>
  );
};

export default App;
