import React, { useEffect, useState } from "react";
import axiosCall from "../components/axios";
import Banner from "../components/parts/Banner";
import Breadcrumb from "../components/parts/Breadcrumb";

const About = () => {
  const [about, setAbout] = useState();

  useEffect(() => {
    axiosCall("about").then((res) => setAbout({ ...res.data }));
  }, []);

  // console.log("data-", about);
  // console.log("Our Services-", about);

  return (
    <>
      {about ? (
        <>
          <Banner title={about.name} banner={about.banner} />

          <Breadcrumb name={about.name} />

          <div className="midCon about-section">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="about-content-container">
                    <div className="section-head-container">
                      <div className="ot-heading">
                        <span>
                          <i className="fas fa-building"></i> {about.name}
                        </span>

                        <p>{about.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="flip-box-section">
                    <div className="top-flip-box pb-120">
                      <div className="row">
                        <div className="col-md-6 pl-0 pr-0">
                          <div className="single-flip-box">
                            <div className="flip-box-one">
                              <div className="front-side">
                                <div className="flip-content">
                                  <h3>Our Mission</h3>
                                </div>
                              </div>
                              <div className="back-side">
                                <div className="flip-content">
                                  <p>
                                    We are a company that has a sole objective
                                    to provide you one of the most efficient.
                                  </p>
                                  <div className="btn-common btn-flip-box">
                                    <a
                                      className="readMoreBtn"
                                      href="/about-us/mission-and-vision"
                                    >
                                      <span>Read More&nbsp;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 pl-0 pr-0">
                          <div className="single-flip-box mt-30">
                            <div className="flip-box-two">
                              <div className="front-side">
                                <div className="flip-content">
                                  <h3>Our Vision</h3>
                                </div>
                              </div>
                              <div className="back-side">
                                <div className="flip-content">
                                  <p>
                                    We are a company that has a sole objective
                                    to provide you one of the most efficient.
                                  </p>
                                  <div className="btn-common btn-flip-box">
                                    <a
                                      className="readMoreBtn"
                                      href="/about-us/mission-and-vision"
                                    >
                                      <span>Read More&nbsp;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 pl-0 pr-0">
                          <div className="single-flip-box">
                            <div className="flip-box-three">
                              <div className="front-side">
                                <div className="flip-content">
                                  <h3>Our Values</h3>
                                </div>
                              </div>
                              <div className="back-side">
                                <div className="flip-content">
                                  <p>
                                    The values by which we endure through the
                                    efficient path that leads us to ultimate
                                    achievements.
                                  </p>
                                  <div className="btn-common btn-flip-box">
                                    <a
                                      className="readMoreBtn"
                                      href="/about-us/our-values"
                                    >
                                      <span>Read More&nbsp;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 pl-0 pr-0">
                          <div className="single-flip-box mt-30">
                            <div className="flip-box-four">
                              <div className="front-side">
                                <div className="flip-content">
                                  <h3>Contact Us</h3>
                                </div>
                              </div>
                              <div className="back-side">
                                <div className="flip-content">
                                  <p>Let's talk business</p>
                                  <div className="btn-common btn-flip-box">
                                    <a
                                      className="readMoreBtn"
                                      href="/contactus"
                                    >
                                      <span>Read More&nbsp;</span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-offer midCon">
            <div className="container">
              <div className="section-head-container">
                <div className="ot-heading">
                  <span>
                    <i className="fas fa-cogs"></i> Our Services
                  </span>
                  <h2>We Offer To Our Clients</h2>
                </div>
              </div>
              <div className="row">
                {about.ourService.map((item, index) => {
                  return (
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 offered-service-col"
                      key={index}
                    >
                      <div className="service-bx">
                        <figure>
                          <img
                            src={item.img}
                            alt=""
                            className="fr-fic fr-dii"
                          />
                        </figure>
                        <div className="service-description">
                          <h3>{item.name}</h3>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="about-md-content midCon">
            <div className="midCon about-section">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="about-single-thumb">
                    <img src={about.img} alt="" className="fr-fic fr-dii" />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="about-content-container">
                      <div className="section-head-container">
                        <div className="ot-heading">
                          <p>{about.desc1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-infolist infolist2 midCon">
            <div className="container">
              <ul>
                {about.aboutFeatures.map((item, index) => {
                  return (
                    <li key={index}>
                      <figure>
                        <img src={item.img} alt="" className="fr-fic fr-dii" />
                      </figure>
                      <p>{item.name}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default About;
