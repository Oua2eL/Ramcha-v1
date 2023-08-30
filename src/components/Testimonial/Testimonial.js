import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonial.css";

const TestimonialSlider = () => {
  const testimonialOptions = {
    items: 1, // Display one item at a time
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      480: {
        items: 1, // Display one item at a time at 480px width
      },
      768: {
        items: 1, // Display two items at a time at 768px width and above
      },
    },
  };

  return (
    <div className="container testimonial-container">
      <div className="row">
        <div>
          <h2 style={{ "text-align": "center" }}> Nos clients satisfaits </h2>
          <OwlCarousel className="owl-carousel" {...testimonialOptions}>
            <div className="testimonial">
              <div className="rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet eum excepturi incidunt laudantium nesciunt omnis,
                  provident repudiandae rerum sed! Amet blanditiis eaque eu!
                </p>
                <h3 className="testimonial-title">
                  <h4>Kelli Kelli</h4>
                </h3>
              </div>
            </div>
            <div className="testimonial">
              <div className="rating">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Amet eum excepturi incidunt laudantium nesciunt omnis,
                  provident repudiandae rerum sed! Amet blanditiis eaque eu!
                </p>
                <h3 className="testimonial-title">
                  <h4>Peter Peter</h4>
                </h3>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
