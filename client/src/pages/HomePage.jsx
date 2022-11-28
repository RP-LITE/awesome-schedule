import React, { useState, useEffect, useContext } from "react";
import "./Homepage.css";
import ModalTemp from "../components/modals/ModalTemplate";
import LoginForm from "../components/modals/LoginForm";
import SignUpForm from "../components/modals/SignUpForm";
import Auth from "@/utils/Auth";
import { Link } from "react-router-dom";
import { UserContext } from "@/utils/UserContext";
import Logo from "../assets/Jot it Down Logo.png";

export default function HomePage() {
  const context = useContext(UserContext);
  return (
    <section className='page-container-home'>
       <div className='flex m-0 flex-col content-center items-center py-10 px-20'>
       <img className='logo' src={Logo} alt='Jot it Down'></img>
        
        <span className='text-3xl text-red'>
          ~ The Last Scheduler You'll Ever Need ~
        </span>
        <div className='content-center items-center py-10 px-20'>
          <p>
            Jot it Down is a two way client-provider scheduling service.
            Clients can search for providers and schedule appointments for
            services. Providers can post there available serices and service
            details, as well as hours of operation.
          </p>
        </div>

        {context.Auth.loggedIn ? (
          <button className='headerlink mainButton'>
            <Link to='/dashboard' relative='path'>
              Head to Dashboard
            </Link>
          </button>
        ) : (
          <div className='flex p-5 pageButtons'>
            <ModalTemp title='Sign Up' modalTitle='Sign Up'>
              <SignUpForm />
            </ModalTemp>
            <ModalTemp title='Log In' modalTitle='Log In'>
              <LoginForm />
            </ModalTemp>
          </div>
        )}
      </div>
    </section>
  );
}
