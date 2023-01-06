import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosCall from "../axios";

const MobileMenu = () => {
  const [menu, setMenu] = useState(null);
  const [toggle, setToggle] = useState(false)
  const [submenu, setSubmenu] = useState(null);

  const [mobmenu, setMobMenu] = useState([]);
  useEffect(() => {
    axiosCall("pages").then((res) => setMobMenu([...res.data]));
  }, []);

  // console.log("MobileMenu - ", mobmenu);

  return (
    <ul id="sidebar-menu" className="popupMenu">
      {mobmenu?.map((item, index) => {
        return (
          <li
            className={`sidebar_li ${item.resulation === 1 ? "des_hide" : ""}`}
            onClick={() => {setMenu(index); setToggle(!toggle)}}
            key={index}
          >
            <Link to="/" className={`${menu === index ? "active" : ""}`}>{item.name}</Link>
            <ul className={`dropdown-des-li ${menu === index ? "active" : ""}`}>
              {item?.categories?.map((cate, i) => {
                return (
                  <li
                    className={`${cate.name === "" ? "" : "dropdown__li"}`}
                    onClick={() => setSubmenu(i)}
                    key={i}
                  >
                    {cate.name == "" ? (
                      ""
                    ) : (
                      <Link to="/" className={`${ submenu === i ? "active" : "" }`}>
                        <strong>{cate.name}</strong>
                      </Link>
                    )}
                    <ul
                      className={`subdropdown-ul ${ submenu === i ? "active" : "" }`}
                    >
                      {cate?.sub_categories?.map((subitem, x) => {
                        return (
                          <li key={x}>
                            <Link to={`${item.slug}/${subitem.slug}`}>
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
          </li>
        );
      })}

      <li>
        <Link to="/testimonials">Testimonials</Link>
      </li>

      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
