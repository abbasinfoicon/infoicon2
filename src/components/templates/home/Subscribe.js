import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import Newsletter from "../Newsletter";
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

const Subscribe = () => {
  const [isOpen, setOpen] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    document.body.classList.toggle("modal-open", isOpen);
    document.querySelector("header").classList.toggle("zIndex", isOpen);
  }, [isOpen]);

  useEffect(() => {
    axiosCall("blog").then((res) => setNews([...res.data]));
  }, []);

  return (
    <section
      className="letsTalk"
      style={{ backgroundImage: "url(assets/img/nesletter-bg.jpg)" }}
    >
      <div className="home-container pr-0">
        <div className="row w-100 mr-0 ml-0 text-center align-items-center">
          <div className="col-lg-6">
            <Newsletter />

            <div className="home-blog-main">
              <h3>NEWS & UPDATES</h3>
              {news.length && (
                <OwlCarousel className="testimonials home-blog" {...options}>
                  {news.map((item, index) => {
                    if (index < 5) {
                      return (
                        <div className="home-blog-content" key={index}>
                          <p>{item.desc}</p>
                          <Link className="home-blog-anchor" to={`/blog/${item.slug}`}>
                            Read More
                          </Link>
                        </div>
                      );
                    }
                  })}
                </OwlCarousel>
              )}
            </div>
          </div>

          <div className="col-lg-6 pr-0">
            <div className="about-right ">
              <div className="home-about-video1 d-flex justify-content-center mb-0">
                <div className="video-btn align-self-center ">
                  <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="q5sURR9fvvk"
                    onClose={() => setOpen(false)}
                  />

                  <Link className="btn-play1" onClick={() => setOpen(true)}>
                    <i className="fas fa-video"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
