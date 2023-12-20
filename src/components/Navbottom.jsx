import React from "react";
import "./Navbottom.css";
import { FaRegUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Navbottom = () => {
  const [activeNav, setActiveNav] = useState("");
  return (
    <nav className="navbottom">
      <NavLink to="/myportfolio3d/" 
      onClick={() => setActiveNav("/")}
      className={activeNav === "/" ? "active" : ""}>
        <IoHomeOutline />
      </NavLink>
      <NavLink
        to="/myportfolio3d/about"
        onClick={() => setActiveNav("about")}
        className={activeNav === "about" ? "active" : ""}
      >
        <FaRegUser />
      </NavLink>
      <NavLink to="/myportfolio3d/work"
         onClick={() => setActiveNav("work")}
         className={activeNav === "work" ? "active" : ""}
      >
        <BiBook/>
      </NavLink>
      <NavLink to="/myportfolio3d/contact"
         onClick={() => setActiveNav("contact")}
         className={activeNav === "contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </NavLink>
    </nav>
  );
};

export default Navbottom;