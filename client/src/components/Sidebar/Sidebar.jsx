import React, { useState, useEffect, useContext } from "react";
import Logo from "../../assets/Jot it Down Logo.png";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import ModalTemp from "../modals/ModalTemplate";
import { Providers } from "@/components/modals/Providers";
import Auth from "../../utils/Auth";
import { UserContext } from "@/utils/UserContext";

const Sidebar = () => {
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
      <h3>Welcome, User</h3>
      <nav>
        <button className='sidebarlink sidebarlink1'>History 1</button>
        <button className='sidebarlink sidebarlink2'>History 2</button>
        {profile.data.accountType === "client" ? (
          <ModalTemp
            title='Providers'
            className='sidebarlink sidebarlink3'
            modalTitle='Providers'
          >
            <Providers />
          </ModalTemp>
        ) : (
          <div className='sidebarlink sidebarlink3'>Provider Page</div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
