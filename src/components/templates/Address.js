import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import axiosCall from "../axios";

const options = {
  items: 1,
  nav: false,
  dots: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
  autoplay: true,
  loop: true,
};

const Address = () => {
  const [contact, setContact] = useState();
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axiosCall("contact").then((res) => setContact({ ...res.data }));
    axiosCall("gallery").then((res) => setGallery([...res.data]));
  }, []);

  return (
    <>
      {contact &&
        contact.address.map((item, index) => {
          return (
            <div className="midCon office-add-row" key={index}>
              <div className="container">
                <div className="row">
                  <div
                    className={`col-sm-12 col-md-12 col-lg-7 ${
                      (index + 1) % 2 == 0 ? " order-lg-2" : ""
                    }`}
                  >
                    <OwlCarousel className="contact-slider" {...options}>
                      {(index + 1) % 2 == 0
                        ? gallery.slice(4, 8)?.map((item, i) => {
                            return (
                              <img src={item?.img} alt={item.name} key={i} />
                            );
                          })
                        : gallery.slice(0, 4)?.map((item, i) => {
                            return (
                              <img src={item.img} alt={item.name} key={i} />
                            );
                          })}
                    </OwlCarousel>
                  </div>

                  <div className="col-sm-12 col-md-12 col-lg-5">
                    <div className="address-col">
                      <i className="fab fa-telegram-plane"></i>
                      <p>{item.address}</p>
                      <a
                        className="readMoreBtn navClr"
                        target="_blank"
                        href={item.map}
                      >
                        <span>
                          Get Direction
                          <i className="fab fa-telegram-plane"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Address;
