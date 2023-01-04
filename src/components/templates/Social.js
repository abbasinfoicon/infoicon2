import React, { useEffect, useState } from "react";
import axiosCall from "../axios";

const Social = () => {
  const [social, setSocial] = useState([]);

  // console.log("social-", social);
  useEffect(() => {
    axiosCall("contact").then((res) => setSocial([...res.data.social]));
  }, []);

  return (
    <ul className="social_media">
      {social.map((item, index) => {
        return (
          <li key={index}>
            <a href={`${item.link}`} target="_blank">
              <i className={item.icon}></i>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Social;
