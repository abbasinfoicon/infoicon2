import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axiosCall from "../axios";

const options = {
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  nav: false,
  dots: true,
  autoplayTimeout: 9000,
  autoplaySpeed: 5000,
  autoplay: true,
  loop: true,
  mouseDrag: false,
  touchDrag: false,
};

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axiosCall("homeSlider").then((res) => setSlides([...res.data]));
  }, []);

  return (
    <div className="bannerCon">
      {slides.length && <OwlCarousel className="bannerSlider" {...options}>
        {slides.map((item, index) => {
            return (
              <div
                className="bannerItem"
                style={{ backgroundImage: `url(${item.img})` }}
                key={index}
              >
                <div className="home-container">
                  <div className="bannerBox">
                    <h2 className="bannerHd">{item.title}</h2>
                    <div className="bannerText">{item.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </OwlCarousel>}
    </div>
  );
};

export default Slider;
