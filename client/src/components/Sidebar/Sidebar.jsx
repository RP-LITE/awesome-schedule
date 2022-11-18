import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <header className='sidebar'>
      <nav>
        <NavLink className='sidebarlink sidebarlink1' to='/'>
          History 1
        </NavLink>
        <NavLink className='sidebarlink sidebarlink2' to='/'>
          History 2
        </NavLink>
        <NavLink className='sidebarlink sidebarlink3' to='/'>
          Schedule somewhere new
        </NavLink>
        {/* will need to generate based off of previous appointments */}
      </nav>
    </header>
  );
};

export default Sidebar;
