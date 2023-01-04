import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosCall from "../axios";
import MobileMenu from "./MobileMenu";
import ModalPopup from "./ModalPopup";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    axiosCall("contact").then((res) => setSocial([...res.data.social]));
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  },[]);

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? header.classList.add("active")
      : header.classList.remove("active");
  };

  const handleEnter = () => {
    setIsMouseOver(true);
  };

  const handleLeave = () => {
    setIsMouseOver(false);
  };

  const mobMenuCover = () => {
    const mobileMenu = document.querySelector(".mobMenuCover");
    const bodyClass = document.querySelector("body");
    bodyClass.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  };

  return (
    <header className={isMouseOver ? "open" : ""}>
      <div className="home-container">
        <h1 className="logo">
          <Link to="/">
            <img
              src="assets/img/logo-white.png"
              className="top"
              alt="Infoicon Logo"
              width="235"
            />
            <img
              className="after"
              src="assets/img/logo-gray.png"
              alt="Infoicon Logo"
              width="235"
            />
          </Link>
        </h1>
        <div className="headRgt">
          <nav className="menu">
            <ul>
              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">About us</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner abot">
                      <ul className="subMenu">
                        <li>
                          <Link to="/">
                            <strong>Corporate Info</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">About Company</Link>
                            </li>
                            <li>
                              <Link to="#">Mission and Vision</Link>
                            </li>
                            <li>
                              <Link to="#">Our Values</Link>
                            </li>
                            <li>
                              <Link to="#">Contact Us</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">
                            <strong>Quick Contact Info</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="tel:+91-120-413-9663">
                                IN +91-120-413-9663
                              </Link>
                            </li>
                            <li>
                              <Link to="tel:+13156887243">
                                USA +1 31 5688 7243
                              </Link>
                            </li>
                            <li>
                              <Link to="tel:+442032892658">
                                UK +44 20 3289 2658
                              </Link>
                            </li>
                            <li>
                              <Link to="tel:+91-0120-426-5539">
                                Fax: +91-0120-426-5539
                              </Link>
                            </li>
                            <li>
                              <a href="mailto:info@infoicontechnologies.com">
                                info@infoicontechnologies.com
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <div className="flexBox menuBoxSep">
                        <div className="menuBoxLink">
                          <span>Certifications</span>
                          <ul className="parrNewlink partners-logo">
                            <li>
                              <div className="inner">
                                <Link
                                  to="https://www.infoicontechnologies.com/Member-Certificate-NSCM.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="assets/img/nasscom-logo.png"
                                    alt="Nasscom Logo"
                                    width="100"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link
                                  to="https://www.infoicontechnologies.com/ISO-9001-2015-certified.pdf"
                                  target="_blank"
                                >
                                  <img
                                    src="assets/img/iso-certified-logo.png"
                                    alt="ISO Certified Logo"
                                    width="80"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link
                                  to="https://www.dmca.com/Protection/Status.aspx?ID=9e441b9a-efe3-413e-a1e2-2313e82a624c&refurl=https://www.infoicontechnologies.com/"
                                  target="_blank"
                                >
                                  <img
                                    src="assets/img/dmca-logo.png"
                                    alt="DCMA Logo"
                                    width="100"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link to="/">
                                  <img
                                    src="assets/img/magento-certified-logo.png"
                                    alt="Magento Certified Logo"
                                    width="60"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link
                                  to="https://skillshop.exceedlms.com/profiles/e0a73a8324fb4a27be8cfd042962f925"
                                  target="_blank"
                                >
                                  <img
                                    src="assets/img/google-partner-logo.png"
                                    alt="Google Partner Logo"
                                    width="125"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link to="/">
                                  <img
                                    src="assets/img/google-adword-logo.png"
                                    alt="Google Adword Logo"
                                    width="125"
                                  />
                                </Link>
                              </div>
                            </li>

                            <li>
                              <div className="inner">
                                <Link to="/">
                                  <img
                                    src="assets/img/amazon-web-services-logo.png"
                                    alt="Amazon Web Services Logo"
                                    width="150"
                                  />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="inner">
                                <Link
                                  to="https://learninglab.about.ads.microsoft.com/certification/membership-profile/id/368050/infoicon-technologies/"
                                  target="_blank"
                                >
                                  <img
                                    src="assets/img/microsoft-marketing-partner-logo.png"
                                    alt="Microsoft Marketing Partner Logo"
                                    width="150"
                                  />
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">Services</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner">
                      <ul className="subMenu services">
                        <li>
                          <Link to="/">
                            <strong>Mobility Solution</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Mobile Apps Development</Link>
                            </li>
                            <li>
                              <Link to="/">Open Source Customization</Link>
                            </li>
                            <li>
                              <Link to="/">Web Development</Link>
                            </li>
                            <li>
                              <Link to="/">Custom Toolbar Development</Link>
                            </li>
                            <li>
                              <Link to="/">Augmentation Really</Link>
                            </li>
                            <li>
                              <Link to="/">Virtual Reality</Link>
                            </li>
                            <li>
                              <Link to="/">AWS Migration</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>Tech Expertise</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">PHP Development</Link>
                            </li>
                            <li>
                              <Link to="/">Digital Marketing</Link>
                            </li>
                            <li>
                              <Link to="/">Software Development</Link>
                            </li>
                            <li>
                              <Link to="/">.Net Framework</Link>
                            </li>
                            <li>
                              <Link to="/">Web API Framework</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Application Maintenance Services
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Hire Dedicated Team</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>Solution Design</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">GIS Development</Link>
                            </li>
                            <li>
                              <Link to="/">Artificial Intelligence</Link>
                            </li>
                            <li>
                              <Link to="/">Java/j2EE Development</Link>
                            </li>
                            <li>
                              <Link to="/">Microsoft SharePoint Framework</Link>
                            </li>
                            <li>
                              <Link to="/">Microsoft Azure Stack</Link>
                            </li>
                            <li>
                              <Link to="/">Microsoft Azure</Link>
                            </li>
                            <li>
                              <Link to="/">Software Testing</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <div className="flexBox menuBoxSep">
                        <div className="menuBoxLink client-video">
                          <span>Success Stories</span>
                          <iframe
                            width="250"
                            height="127"
                            allowFullScreen=""
                            src="https://www.youtube.com/embed/q5sURR9fvvk?showinfo=0=0?rel=0&amp;autoplay"
                            title=""
                            data-toggle="tooltip"
                            data-original-title=""
                          ></iframe>
                        </div>
                        <div className="menuBoxLink">
                          <span>&nbsp;</span>
                          <iframe
                            width="250"
                            height="127"
                            allowFullScreen=""
                            src="https://www.youtube.com/embed/xw5ONF_nIMY?showinfo=0=0?rel=0&amp;autoplay"
                            title=""
                            data-toggle="tooltip"
                            data-original-title=""
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">Expertise</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner sol">
                      <ul className="subMenu">
                        <li>
                          <Link to="/">
                            <strong>CMS Development</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Woocommerce Development</Link>
                            </li>
                            <li>
                              <Link to="/">Magento Development</Link>
                            </li>
                            <li>
                              <Link to="/">Codeigniter Development</Link>
                            </li>
                            <li>
                              <Link to="/">Wordpress Development</Link>
                            </li>
                            <li>
                              <Link to="/">Joomla Development </Link>
                            </li>
                            <li>
                              <Link to="/">Typo3 Development</Link>
                            </li>
                            <li>
                              <Link to="/">Drupal Development</Link>
                            </li>
                            <li>
                              <Link to="/">Frog CMS Development</Link>
                            </li>
                            <li>
                              <Link to="/">Silver Stripe Development</Link>
                            </li>
                            <li>
                              <Link to="/">Impress CMS Development</Link>
                            </li>
                            <li>
                              <Link to="/">Exponent CMS Development</Link>
                            </li>
                            <li>
                              <Link to="/">X-Cart</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">
                            <strong>PHP Expertise</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Cakephp Development</Link>
                            </li>
                            <li>
                              <Link to="/">YII Development</Link>
                            </li>
                            <li>
                              <Link to="/">Moodle Development</Link>
                            </li>
                            <li>
                              <Link to="/">OsCommerce Development</Link>
                            </li>
                            <li>
                              <Link to="/">Symfony Development</Link>
                            </li>
                            <li>
                              <Link to="/">Django Development</Link>
                            </li>
                            <li>
                              <Link to="/">Shopware Development</Link>
                            </li>
                            <li>
                              <Link to="/">Prado Development</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>Sforce Development</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Python Development</Link>
                            </li>
                            <li>
                              <Link to="/">MongoDB Development</Link>
                            </li>
                            <li>
                              <Link to="/">Laravel Development</Link>
                            </li>
                            <li>
                              <Link to="/">PHP-MVC Development</Link>
                            </li>
                            <li>
                              <Link to="/">Zend Framwork</Link>
                            </li>
                            <li>
                              <Link to="/">Phalcon Development</Link>
                            </li>
                            <li>
                              <Link to="/">FuelPHP Development</Link>
                            </li>
                            <li>
                              <Link to="/">Fat-Free Development</Link>
                            </li>
                            <li>
                              <Link to="/">Zoop Development</Link>
                            </li>
                            <li>
                              <Link to="/">Simple PHP Development</Link>
                            </li>
                            <li>
                              <Link to="/">Akelos Development</Link>
                            </li>
                            <li>
                              <Link to="/">Ruby on Rails Development</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>js Libraries & Frameworks</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Angular.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">React.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Vue.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Node.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Ember.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Express.js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Win js Development</Link>
                            </li>
                            <li>
                              <Link to="/">Polymer Framework</Link>
                            </li>
                            <li>
                              <Link to="/">PureMVC Framework</Link>
                            </li>
                            <li>
                              <Link to="/">Ionic Framework</Link>
                            </li>
                            <li>
                              <Link to="/">Bootstrap</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">Infra Services</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner sol">
                      <ul className="subMenu">
                        <li>
                          <Link to="/">
                            <strong>Backend Support</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Network Support</Link>
                            </li>
                            <li>
                              <Link to="/">Database Support</Link>
                            </li>
                            <li>
                              <Link to="/">Database Admin Support</Link>
                            </li>
                            <li>
                              <Link to="/">Application Support</Link>
                            </li>
                            <li>
                              <Link to="/">
                                System Administration And Virtualization
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/">
                            <strong>Cloud Services</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Amazon Cloud Migration</Link>
                            </li>
                            <li>
                              <Link to="/">Google APPS Migration</Link>
                            </li>
                            <li>
                              <Link to="/">VPN</Link>
                            </li>
                            <li>
                              <Link to="/">Dedicated Hosting</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>Sforce Development</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Application Security</Link>
                            </li>
                            <li>
                              <Link to="/">Cloud Amazon</Link>
                            </li>
                            <li>
                              <Link to="/">Google Cloud</Link>
                            </li>
                            <li>
                              <Link to="/">OWASP</Link>
                            </li>
                            <li>
                              <Link to="/">BPM</Link>
                            </li>
                            <li>
                              <Link to="/">Salesforce Consulting</Link>
                            </li>
                            <li>
                              <Link to="/">Salesforce Development</Link>
                            </li>
                            <li>
                              <Link to="/">Salesforce Integration</Link>
                            </li>
                            <li>
                              <Link to="/">Salesforce Consulting</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link to="/">
                            <strong>Sharepoint development</strong>
                          </Link>
                          <ul>
                            <li>
                              <Link to="/">Hire A Salesforce Developer</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Salesforce Mobile App Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Salesforce For Partners</Link>
                            </li>
                            <li>
                              <Link to="/">Sharepoint Enterprise Search</Link>
                            </li>
                            <li>
                              <Link to="/">Sharepoint-(BI)</Link>
                            </li>
                            <li>
                              <Link to="/">Sharepoint-(BPM)</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Sharepoint Custom Application Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                Sharepoint Extranet Development
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Sharepoint Data Migration</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Sharepoint Enterprise Content Management
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">Industries</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner part">
                      <ul className="subMenu">
                        <li>
                          <ul>
                            <li>
                              <Link to="/">Health Care</Link>
                            </li>
                            <li>
                              <Link to="/">Marketing</Link>
                            </li>
                            <li>
                              <Link to="/">Retail</Link>
                            </li>
                            <li>
                              <Link to="/">Shopping</Link>
                            </li>
                            <li>
                              <Link to="/">Medical</Link>
                            </li>
                            <li>
                              <Link to="/">Manufacturing Industry</Link>
                            </li>
                            <li>
                              <Link to="/">Agriculture</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">Automobiles</Link>
                            </li>
                            <li>
                              <Link to="/">Banking</Link>
                            </li>
                            <li>
                              <Link to="#l">Biotechnology</Link>
                            </li>
                            <li>
                              <Link to="/">Information Technologies</Link>
                            </li>
                            <li>
                              <Link to="/">Consumer Markets</Link>
                            </li>
                            <li>
                              <Link to="/">Education And Training</Link>
                            </li>
                            <li>
                              <Link to="/">Engineering</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">Financial Services</Link>
                            </li>
                            <li>
                              <Link to="/">Food Industry</Link>
                            </li>
                            <li>
                              <Link to="/">Gems And Jewellery</Link>
                            </li>
                            <li>
                              <Link to="/">Insurance</Link>
                            </li>
                            <li>
                              <Link to="/">Media And Entertainment</Link>
                            </li>
                            <li>
                              <Link to="/">Oil And Gas</Link>
                            </li>
                            <li>
                              <Link to="/">Pharmaceuticals</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">Real Estate</Link>
                            </li>
                            <li>
                              <Link to="/">Research And Development</Link>
                            </li>
                            <li>
                              <Link to="/">Science And Technology</Link>
                            </li>
                            <li>
                              <Link to="/">Spa &amp; Wellness</Link>
                            </li>
                            <li>
                              <Link to="/">Telecommunications</Link>
                            </li>
                            <li>
                              <Link to="/">Tourism And Hospitality</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className="ddMenu"
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              >
                <Link to="/">Custom Solutions</Link>
                <div className="submenuBox">
                  <div className="home-container menuOuter">
                    <div className="menuTopInner custom-solutions">
                      <ul className="subMenu">
                        <li>
                          <ul>
                            <li>
                              <Link to="/">Custom Software Development</Link>
                            </li>
                            <li>
                              <Link to="/">Internet Software Development</Link>
                            </li>
                            <li>
                              <Link to="/">Microsoft Development</Link>
                            </li>
                            <li>
                              <Link to="/">DNN Development Services</Link>
                            </li>
                            <li>
                              <Link to="/">SugarCRM Development</Link>
                            </li>
                            <li>
                              <Link to="/">Offshore Development Center</Link>
                            </li>
                            <li>
                              <Link to="/">Quality Control Services</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">IT Consulting</Link>
                            </li>
                            <li>
                              <Link to="/">Knowledge Management</Link>
                            </li>
                            <li>
                              <Link to="/">Application Migration</Link>
                            </li>
                            <li>
                              <Link to="/">Trading Services</Link>
                            </li>
                            <li>
                              <Link to="/">
                                Product Authentication Solution
                              </Link>
                            </li>
                            <li>
                              <Link to="/">Education Software Products</Link>
                            </li>
                            <li>
                              <Link to="/">Financial Accounting</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">Salesforce Consulting</Link>
                            </li>
                            <li>
                              <Link to="/">SugarCRM Consulting</Link>
                            </li>
                            <li>
                              <Link to="/">Database Programing</Link>
                            </li>
                            <li>
                              <Link to="/">Python Development</Link>
                            </li>
                            <li>
                              <Link to="/">Ruby On Rails Development</Link>
                            </li>
                            <li>
                              <Link to="/">Microsoft Dynamics</Link>
                            </li>
                            <li>
                              <Link to="/">Volusion Development</Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <ul>
                            <li>
                              <Link to="/">DotNetNuke Development</Link>
                            </li>
                            <li>
                              <Link to="/">Social Networking Applications</Link>
                            </li>
                            <li>
                              <Link to="/">Content Management System</Link>
                            </li>
                            <li>
                              <Link to="/">HRMS And Payroll System Design</Link>
                            </li>
                            <li>
                              <Link to="/">HTML5 Development</Link>
                            </li>
                            <li>
                              <Link to="/">Ajex</Link>
                            </li>
                            <li>
                              <Link to="/">Flash</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <button className="readMoreBtn" onClick={() => setIsOpen(true)}>
                  <span>Request Quote</span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="mobMenuCover">
            <span className="circle"></span>
            <span className="mobMenu" onClick={() => mobMenuCover()}>
              <em></em>
              <em></em>
              <em></em>
            </span>
            <div className="quickMenuCon">
              <div className="popupMenuBox">
                <div className="popupLogo">
                  <Link to="/">
                    <img src="assets/img/logo-gray.png" alt="Logo" />
                  </Link>
                </div>

                <div className="hamburger-menu">
                  <MobileMenu />

                  <ul className="popupMenu smll">
                    <li>
                      <Link to="/" className="zone-btn">
                        Clients Login
                      </Link>
                      <Link to="#" className="zone-btn">
                        Employees Login
                      </Link>
                    </li>
                  </ul>

                  <div className="popupBot">
                    <ul className="conInfo">
                      <li>
                        <img src="assets/img/india-flag.png" alt="" />
                        +91-120-413-9663
                      </li>
                      <li>
                        <img src="assets/img/usa-flag.png" alt="" />
                        +1 31 5688 7243
                      </li>
                      <li>
                        <img src="assets/img/uk-flag.png" alt="" />
                        +44 20 3289 2658
                      </li>
                      <li>
                        <Link to="mailto:sales@infoicontechnologies.com">
                          
                          <i className="far fa-envelope"></i>
                          sales@infoicontechnologies.com
                        </Link>
                      </li>
                    </ul>
                    <ul className="topSocialLink flexBox">
                      {social.map((item, index) => {
                        return (
                          <li key={index}>
                            <a href={item.link} target="_blank">
                              <i className={item.icon}></i>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalPopup modalIsOpen={IsOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
