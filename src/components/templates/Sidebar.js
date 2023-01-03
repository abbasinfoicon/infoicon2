import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalPopup from "../parts/ModalPopup";

const Sidebar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  return (
    <div className="rgtLinks botPad20">
      <ul>
        <li>
          <Link to="/">
            <span>01</span> Why Infoicon?
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>02</span> Process Management
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>03</span> Hire Dedicated Team or Developer
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>04</span> Engagement Models
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>05</span> Partnership With Us
          </Link>
        </li>
      </ul>

      <button className="readMoreBtn navClr" onClick={() => setIsOpen(true)}>
        <span>
          Request Quote <i className="fas fa-paper-plane"></i>
        </span>
      </button>

      <ModalPopup modalIsOpen={IsOpen} setIsOpen={setIsOpen}/>
    </div>
  );
};

export default Sidebar;
