import React from "react";
import { NavLink } from "react-router-dom";
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active_link" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdHomeFilled /> Home
        </div>
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdCategory />
          Solar 
        </div>
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdShop2 />
       Water 
        </div>
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "" : "")}
      >
        <div className="flexCenter gap-x-1">
          <MdContacts />
         Lighting 
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
