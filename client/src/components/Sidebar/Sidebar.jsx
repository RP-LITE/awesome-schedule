import React from "react";
import Logo from "../../assets/Jot it Down Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import ModalTemp from "../modals/ModalTemplate";
import { Providers } from "@/components/modals/Providers";

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
        <img className='iconimage' src={Logo} alt='Jot it Down'></img>
        <button className='sidebarlink sidebarlink1 mainButton'>
          History 1
        </button>
        <button className='sidebarlink sidebarlink2 mainButton'>
          History 2
        </button>
        <ModalTemp
          title='Places'
          className='sidebarlink sidebarlink3 mainButton'
        >
          <Providers />
        </ModalTemp>
        {/* will need to generate based off of previous appointments */}
      </nav>
    </header>
  );
};

export default Sidebar;
