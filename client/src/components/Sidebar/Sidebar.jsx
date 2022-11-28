import React from "react";
import Logo from "../../assets/Jot it Down Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import ModalTemp from "../modals/ModalTemplate";
import { Providers } from "@/components/modals/Providers";
import Auth from "../../utils/Auth";

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
    <aside className='sidebar'>
      <img className='iconimage' src={Logo} alt='Jot it Down'></img>
      <h3>Welcome, User</h3>
      <nav>
        <button className='sidebarlink sidebarlink1'>History 1</button>
        <button className='sidebarlink sidebarlink2'>History 2</button>
        <ModalTemp
          title='Places'
          className='sidebarlink sidebarlink3 mainButton'
          modalTitle='Providers'
        >
          <Providers />
        </ModalTemp>
        {/* will need to generate based off of previous appointments */}
      </nav>
    </aside>
  );
};

export default Sidebar;
