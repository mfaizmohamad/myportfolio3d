import React from "react";
import "./Navbottom.css";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";

const Navbottom = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navbottom">
      <a href="#" 
      onClick={() => setActiveNav("#")}
      className={activeNav === "#" ? "active" : ""}>
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a href="#work"
         onClick={() => setActiveNav("#work")}
         className={activeNav === "#work" ? "active" : ""}
      >
        <BiBook/>
      </a>
      <a href="#contact"
         onClick={() => setActiveNav("#contact")}
         className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Navbottom;