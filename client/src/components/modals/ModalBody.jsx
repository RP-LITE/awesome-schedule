import React, { useState } from "react";
import "./modal.css";
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"

const ModalBody = ({ closeModal }) => {
  return (
    <div className='modalBackground Overlay'>
      <div className='modalContainer'>
        <button onClick={() => closeModal(false)}> X </button>
        <SignUpForm />
      </div>
    </div>
  );
};

export default ModalBody;
