import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
// import ModalOpen from "@/components/modals/ModalOpen";
// import ModalBody from "@/components/modals/ModalBody";
import ModalTemp from "../modals/ModalTemplate";
import Auth from "../../utils/Auth";
import LoginForm from "../modals/LoginForm";
import SignUpForm from "../modals/SignUpForm";

const Header = () => {
  const [userType, setUserType] = useState("");

  //user.type (User model) will determine the state here and render conditionally based on that.

  return (
    <header className='header'>
      <nav className='flex'>
        <NavLink to='/' className='headerlink'>
          Home
        </NavLink>

        {Auth.loggedIn() ? (
          <>
            <NavLink to='/dashboard' className='headerlink'>
              Dashboard
            </NavLink>
            <button className='headerlink mainButton' onClick={Auth.logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <ModalTemp title='Login' className='headerlink'>
              <LoginForm />
            </ModalTemp>
            <ModalTemp title='Sign Up' className='headerlink'>
              <SignUpForm />
            </ModalTemp>
          </>
        )}

        {/* will fix Dashboard link to conditionally render based on userType state once Models and login are created */}
      </nav>
    </header>
  );
};

export default Header;
