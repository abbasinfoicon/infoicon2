import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosCall from "../axios";
import MobileMenu from "./MobileMenu";
import ModalPopup from "./ModalPopup";

const Header = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [social, setSocial] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axiosCall("contact").then((res) => setSocial([...res.data.social]));
    axiosCall("pages").then((res) => setMenu([...res.data]));

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // console.log("Menu - ", menu);

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
              {menu.slice(0, 6).map((item, index) => {
                return (
                  <li
                    className="ddMenu"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    key={index}
                  >
                    <Link to="/">{item.name}</Link>
                    <div className="submenuBox">
                      <div className="home-container menuOuter">
                        <div className="menuTopInner sol">
                          <ul className="subMenu">
                            {item?.categories?.map((cate, i) => {
                              return (
                                <li key={i} className={cate.name == "" ? ("subMenu_li_columns") :("subMenu_li")}>
                                  {cate.name == "" ? (
                                    ""
                                  ) : (
                                    <Link to="/">
                                      <strong>{cate.name}</strong>
                                    </Link>
                                  )}

                                  <ul>
                                    {cate?.sub_categories?.map((subitem, x) => {
                                      return (
                                        <li key={x}>
                                          <Link
                                            to={`${item.slug}/${subitem.slug}`}
                                          >
                                            {subitem.name}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </li>
                              );
                            })}
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}

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
                      <a href="http://www.infoicon.co.in/pms/" className="zone-btn" target="_blank">
                        Clients Login
                      </a>
                      <a href="http://www.infoicon.co.in/employee-login/" className="zone-btn" target="_blank">
                        Employees Login
                      </a>
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
