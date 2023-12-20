import React from "react";
import "./Navbottom.css";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbottom = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <NavLink className="navbottom">
      <a href="/myportfolio3d/" 
      onClick={() => setActiveNav("/")}
      className={activeNav === "/" ? "active" : ""}>
        <IoHomeOutline />
      </a>
      <a
        href="/myportfolio3d/about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <FaRegUser />
      </a>
      <a href="/myportfolio3d/work"
         onClick={() => setActiveNav("work")}
         className={activeNav === "work" ? "active" : ""}
      >
        <BiBook/>
      </a>
      <a href="/myportfolio3d/contact"
         onClick={() => setActiveNav("contact")}
         className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </NavLink>
  );
};

export default Navbottom;