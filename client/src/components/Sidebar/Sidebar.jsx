import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/Jot it Down Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import ModalTemp from "../modals/ModalTemplate";
import { Providers } from "@/components/modals/Providers";
import Auth from "../../utils/Auth";
import { UserContext } from "@/utils/UserContext";

const Sidebar = ({ user }) => {
  // function historyButton (businessName) {
  //   const historyButton = $(`<div><button>${businessName}</button></div>`)
  //       $(".cities").append(historyButton)
  //       historyButton.on("click", function() {
  //           $("form input").val(businessName)
  //           $("form").submit()
  //       })
  // }
  const context = useContext(UserContext);
  const profile = context.Auth.profile;

  return (
    <aside className='sidebar'>
      <img className='iconimage' src={Logo} alt='Jot it Down'></img>
      {/* <div className=' welcomeUser flex items-center justify-center'>
        <h3>Welcome, {profile.data.username}</h3>
      </div> */}
      <nav>
        <button className='sidebarlink sidebarlink1'>History 1</button>
        <button className='sidebarlink sidebarlink3'>History 2</button>
        {profile.data.accountType === "client" ? (
          <ModalTemp
            title='Providers'
            className='sidebarlink sidebarlink3'
            modalTitle='Providers'
          >
            <Providers />
          </ModalTemp>
        ) : (
          <div className='sidebarlink sidebarlink2'>Provider Page</div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
