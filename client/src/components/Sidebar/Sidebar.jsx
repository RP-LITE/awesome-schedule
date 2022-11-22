import React from "react";
import Logo from '../../assets/Jot it Down Logo.png'
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  
// function historyButton (businessName) {
//   const historyButton = $(`<div><button>${businessName}</button></div>`)  
//       $(".cities").append(historyButton)
//       historyButton.on("click", function() {
//           $("form input").val(businessName)
//           $("form").submit()
//       })
// }
  
  return (
    <header className='sidebar'>
      <nav>
        <img className="iconimage" src={Logo} alt="Jot it Down"></img>
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
