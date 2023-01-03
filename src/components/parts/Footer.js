import React from "react";
import Subscribe from "../templates/home/Subscribe";
import Social from "../templates/Social";
import ScrollTopToBottom from "./ScrollTopToBottom";

const Footer = () => {
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
            <div className="footerCol colm1 ">
              <h4 className="footerHd">Enlightenment</h4>
              <div className="flexBox">
                <div className="footerLink width50">
                  <ul>
                    <li>
                      <a href="#">Legal Disclaimer</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">NON Disclosure Agreement</a>
                    </li>
                    <li>
                      <a href="#">White Label Partnership</a>
                    </li>
                    <li>
                      <a href="#">Payment Methods</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        Infoicon Global
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerCol colm2 ">
              <h4 className="footerHd">Highlights</h4>
              <div className="flexBox">
                <div className="footerLink width50">
                  <ul>
                    <li>
                      <a href="#">Career</a>
                    </li>
                    <li>
                      <a href="#">BPO Services</a>
                    </li>
                    <li>
                      <a href="#">News and Events</a>
                    </li>
                    <li>
                      <a href="#">Cloud Computing</a>
                    </li>
                    <li>
                      <a href="#">Amazon Cloud Migration</a>
                    </li>
                    <li>
                      <a href="#">Google APPS Migration</a>
                    </li>
                    <li>
                      <a href="#">IT Infrastructure Services</a>
                    </li>
                    <li>
                      <a href="#">Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerCol colm3 ">
              <h4 className="footerHd">Glimpse</h4>
              <div className="flexBox">
                <div className="footerLink width50">
                  <ul>
                    <li>
                      <a href="#">Mobile Development Store</a>
                    </li>
                    <li>
                      <a href="#">Web Development Store</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing Store</a>
                    </li>
                    <li>
                      <a href="#">S/W Development Store</a>
                    </li>
                    <li>
                      <a href="#">Custom Development</a>
                    </li>
                    <li>
                      <a href="#">Big Data Analytics Solution</a>
                    </li>
                    <li>
                      <a href="#">Adobe Experience Manager</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerCol colm4 ">
              <h4 className="footerHd">Expertise</h4>
              <div className="flexBox">
                <div className="footerLink width50">
                  <ul>
                    <li>
                      <a href="#">Mobile Apps Development</a>
                    </li>
                    <li>
                      <a href="#">React JS</a>
                    </li>
                    <li>
                      <a href="#">Node js Development</a>
                    </li>
                    <li>
                      <a href="#">Vue js Development</a>
                    </li>
                    <li>
                      <a href="#">ROR Development</a>
                    </li>
                    <li>
                      <a href="#">GIS Development</a>
                    </li>
                    <li>
                      <a href="#">Hybris Development</a>
                    </li>
                    <li>
                      <a href="#">Metaverse Avatar Development</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footerCol colm5 ">
              <h4 className="footerHd">Get in Touch</h4>
              <div className="flexBox">
                <div className="footerLink width50">
                  <div className="address">
                    <p>
                      <img
                        src="assets/img/india-flag.png"
                        alt=" "
                        className="fr-fic fr-dii"
                        width="20"
                      />
                      &nbsp;<a href="tel:+911204957436">+91-120-495-7436</a>
                    </p>
                    <p>
                      <img
                        src="assets/img/usa-flag.png"
                        alt=" "
                        className="fr-fic fr-dii"
                        width="20"
                      />
                      &nbsp;+1 31 5688 7243
                    </p>
                    <p>
                      <img
                        src="assets/img/uk-flag.png"
                        alt=" "
                        className="fr-fic fr-dii"
                        width="20"
                      />
                      &nbsp;+44 20 3289 2658
                    </p>
                    <p>
                      <a href="mailto:sales@infoicontechnologies.com">
                        <i className="far fa-envelope">&nbsp;</i>{" "}
                        sales@infoicontechnologies.com
                      </a>
                    </p>
                    <p>
                      <a
                        className="zone-btn"
                        href="http://www.infoicon.co.in/pms/"
                        target="_blank"
                      >
                        Clients Login
                      </a>
                      <a
                        className="zone-btn"
                        href="http://www.infoicon.co.in/employee-login/"
                        target="_blank"
                      >
                        Employees Login
                      </a>
                    </p>
                    <p>
                      <a
                        className="zone-btn"
                        href="http://www.infoicon.co.in/leadtool/"
                        target="_blank"
                      >
                        LSD Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="home-container">
            <div className="row">
              <div className="col-md-12 colm2 text-center">
                <div className="footer-copyright-text">
                  <p>
                    © 2022 www.infoicontechnologies.com all right reserved.{" "}
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
