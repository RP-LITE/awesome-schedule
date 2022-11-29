import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
// import ModalOpen from "@/components/modals/ModalOpen";
// import ModalBody from "@/components/modals/ModalBody";
import ModalTemp from "../modals/ModalTemplate";
// import Auth from "@/utils/Auth";
import LoginForm from "../modals/LoginForm";
import SignUpForm from "../modals/SignUpForm";
import { UserContext } from "@/utils/UserContext";

const Header = () => {
  const [userType, setUserType] = useState("");
  const context = useContext(UserContext);

  return (
    <header className='header'>
      <nav className='flex'>
        <NavLink to='/' className='headerlink yellow'>
          Home
        </NavLink>

        {context.Auth.loggedIn ? (
          <>
            <NavLink to='/dashboard' className='headerlink blue'>
              Dashboard
            </NavLink>
            <button
              className='headerlink red mainButton'
              onClick={context.Auth.logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* <ModalTemp title='Login' className='headerlink red'>
              <LoginForm />
            </ModalTemp>
            <ModalTemp title='Sign Up' className='headerlink yellow'>
              <SignUpForm />
            </ModalTemp> */}
          </>
        )}
        {/* will fix Dashboard link to conditionally render based on userType state once Models and login are created */}
      </nav>
    </header>
  );
};

export default Header;
