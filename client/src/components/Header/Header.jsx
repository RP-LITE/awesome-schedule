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
      <nav>
        <NavLink to='/' className='headerlink'>
          Home
        </NavLink>
        <NavLink to='/dashboard' className='headerlink'>
          Dashboard
        </NavLink>
        {/* <ModalOpen Modal={ModalBody}>Sign In</ModalOpen> */}

        {!Auth.loggedIn() ? (
          <>
            <ModalTemp title='Login'>
              <LoginForm />
            </ModalTemp>
            <ModalTemp title='Sign Up'>
              <SignUpForm />
            </ModalTemp>
          </>
        ) : (
          <ModalTemp />
        )}

        {/* will fix Dashboard link to conditionally render based on userType state once Models and login are created */}
      </nav>
    </header>
  );
};

export default Header;
