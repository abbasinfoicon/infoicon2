import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosCall from "../axios";
import Subscribe from "../templates/home/Subscribe";
import Social from "../templates/Social";
import ScrollTopToBottom from "./ScrollTopToBottom";

const Footer = () => {
  const [footmenu, setFootmenu] = useState([]);

  useEffect(() => {
    axiosCall("footerMenu").then((res) => setFootmenu([...res.data]));
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);

  return (
    <>
      <Subscribe />

      <footer>
        <div className="home-container">
          <div className="footer-top">
            <div className="row clearfix">
              <div className="col-md-4">
                <h2>
                  INFOICON TECHNOLOGIES <strong>PRIVATE LIMITED</strong>
                </h2>
              </div>
              <div className="col-md-4">
                <Social />
              </div>

              <div className="col-md-4">
                <ul className="social_media text-right">
                  <li>
                    <a
                      href="https://play.google.com/store/apps/details?id=nick.noida.InfoIconTechnologies"
                      target="_blank"
                    >
                      <img
                        src="assets/img/icon-google-play.png"
                        width="85"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://apps.apple.com/app/id1601787019"
                      target="_blank"
                    >
                      <img
                        src="assets/img/icon-app-store.png"
                        width="85"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footerTop flexBox">
            {footmenu.map((item, index) => {
              return (
                <div className={`footerCol colm${index + 1}`} key={index}>
                  <h4 className="footerHd">{item.name}</h4>
                  <div className="flexBox">
                    <div className="footerLink width50">
                      <ul>
                        {item.list.map((item, i) => (
                          <li key={i}>
                            {item.link == "" ? (
                              <Link to={item.slug}> {item.name} </Link>
                            ) : (
                              <a href={item.link} target="_blank">
                                {item.name}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="home-container">
            <div className="row">
              <div className="col-md-12 colm2 text-center">
                <div className="footer-copyright-text">
                  <p>
                    © 2009 - <span id="year"></span>, 
                    www.infoicontechnologies.com all right reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollTopToBottom />
    </>
  );
};

export default Footer;
