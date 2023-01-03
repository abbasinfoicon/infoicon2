import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { useGetStoreQuery } from "../../../features/store/storeApi";
import { useGetTestimonialQuery } from "../../../features/testimonial.js/testimonialApi";
import axiosCall from "../../axios";

const options = {
  items: 1,
  nav: false,
  dots: true,
  autoplayTimeout: 9000,
  autoplaySpeed: 3000,
  autoplay: true,
  loop: true,
  mouseDrag: true,
  touchDrag: true,
};

const WhyChoose = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosCall("store").then((res) => setData([...res.data]));
    axiosCall("testimonial").then((res) => {
      const filtered = res.data.filter((data) => data.text);
      setTestimonials([...filtered]);
    });
  }, []);

  return (
    <section className="why-choose-us-area style-two pt-115 pb-90">
      <div className="home-container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="dreamit-section-title  pb-30">
              <div className="about-bg-bar"></div>
              <div className="dreamit-section-sub-title">
                <h5>
                  <i className="fas fa-search"></i> Why Choose Us
                </h5>
              </div>
              <div className="dreamit-section-main-title">
                <h2 className="text-white">
                  We deal with the aspects of <br />
                  professional <span>IT Services</span>
                </h2>
              </div>
              <div className="dreamit-section-content-text">
                <p>
                  We deliver top-notch quality assistance for all IT services. A
                  dedicated and inquisitive team of professionals who giving you
                  the time and confidence to focus on running your business.
                  Infoicon Technologies is at support of clients around the
                  clock and advice to enhancing productivity and real
                  competitive edge.
                </p>
              </div>

              <div className="clientsays">
                {testimonials.length && (
                  <OwlCarousel className="testimonials" {...options}>
                    {testimonials.map((item, index) => {
                      if (index < 5) {
                        return (
                          <div className="testimonial-content" key={index}>
                            <figure className="customer-img">
                              <img src={item.img} alt={item.name} />
                              <i className="fas fa-quote-left"></i>
                            </figure>
                            <p>{item.text}</p>
                            <p className="mt-2">
                              <b>
                                {item.name}, {item.city}
                              </b>
                            </p>
                          </div>
                        );
                      }
                    })}
                  </OwlCarousel>
                )}
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="choose">
              <div className="row topper3">
                {data.map((item, index) => {
                  return (
                    <div className="col-lg-6 col-md-6" key={index}>
                      <div className="single-choose-box">
                        <div className="choose-us-content">
                          <div className="choose-us-icon">
                            <span>
                              <img
                                src={item.icon}
                                alt={item.title}
                                className="front"
                              />
                            </span>
                          </div>
                          <div className="choose-number">
                            <h1>0{index + 1}</h1>
                          </div>
                          <div className="choose-title">
                            <h2>
                              <Link to={`/store/${item.slug}`}>
                                {item.title}
                              </Link>
                            </h2>
                          </div>

                          <div className="choose-content-text">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
