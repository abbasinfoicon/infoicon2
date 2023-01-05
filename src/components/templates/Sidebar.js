import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosCall from "../axios";
import ModalPopup from "../parts/ModalPopup";

const Sidebar = () => {
  const [IsOpen, setIsOpen] = useState(false);
  const [sidebar, setSidebar] = useState([]);

  useEffect(() => {
    axiosCall("options").then((res) => setSidebar([...res.data]));
  }, []);

  // console.log("SIDEBAR-", sidebar);

  return (
    <div className="rgtLinks botPad20">
      <ul>
        {sidebar?.map((list, index) => (
          <li key={index}>
            <Link to={`/${list.slug}`}>
              <span>0{index + 1}</span> {list.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="readMoreBtn navClr" onClick={() => setIsOpen(true)}>
        <span>
          Request Quote <i className="fas fa-paper-plane"></i>
        </span>
      </button>

      <ModalPopup modalIsOpen={IsOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Sidebar;
