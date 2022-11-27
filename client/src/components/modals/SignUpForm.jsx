import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";

import { createUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { UserContext } from "@/utils/UserContext";

const SignUpForm = ({ closeModal }) => {
  const navigate = useNavigate();
  const context = useContext(UserContext);
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
    accountType: "client",
    email: "",
  });

  // set state for form validation
  //   const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await context.signup({
        user: userFormData,
        detail: {
          address: "temp addresss",
        },
      });

      if (!response.user || !response.token) {
        console.log(response);
        throw new Error("something went wrong!");
      }
      setUserFormData({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
  };

  return (
    <>
      <h3 className='text-3xl font=semibold text-center py-5'>Sign Up!</h3>
      <form className='signForm' onSubmit={handleFormSubmit}>
        <div className='labelInput'>
          <label className='label username' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            placeholder='Username'
            id='signUpUname'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username || userFormData.email}
            required
          ></input>
        </div>
        <div className='labelInput'>
          <label className='label password' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            placeholder='********'
            id='signUpPW'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          ></input>
        </div>
        <div className='labelInput'>
          <label className='label email' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            placeholder='Your Email'
            id='signUpEmail'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          ></input>
        </div>
        <div className='radioDiv'>
          <div className='radioLabelInput'>
            <label className='radio' htmlFor='client'>
              Client
            </label>
            <input
              type='radio'
              name='accountType'
              value='client'
              id='clientRadio'
              checked
              onChange={handleInputChange}
            />
          </div>
          <div className='radioLabelInput'>
            <label className='radio' htmlFor='provider'>
              Provider
            </label>
            <input
              type='radio'
              name='accountType'
              value='provider'
              id='providerRadio'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <button
          className='submitBtn'
          disabled={
            !(
              userFormData.username &&
              userFormData.password &&
              userFormData.email
            )
          }
          type='submit'
          variant='success'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
