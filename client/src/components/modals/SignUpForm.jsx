import React, { useState, useContext } from "react";

import { createUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { UserContext } from '@/utils/UserContext';

const SignUpForm = ({closeModal}) => {
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
    <div className='modalBackground'>
      <div className='modalContainer'>
       <form className="signForm" onSubmit={handleFormSubmit}>
          <label className="label username" htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Username'
            id='signUpUname'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username || userFormData.email}
            required
          ></input>
          <label className="label password" htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='********'
           id='signUpPW'
           name='password'
           onChange={handleInputChange}
           value={userFormData.password}
           required
         ></input>
         <label className="label email" htmlFor='email'>Email</label>
         <input
            type='email'
            placeholder='Your Email'
            id='signUpEmail'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
         ></input>
         <label className="radio" htmlFor="client">client</label>
          <input
            type='radio'
            name='accountType'
            value='client'
            id='clientRadio'
            checked
           onChange={handleInputChange}
         />
          <label className="radio" htmlFor="provider">provider</label>
          <input
           type='radio'
            name='accountType'
           value='provider'
           id='providerRadio'
            onChange={handleInputChange}
         />
          <button className="submitBtn"
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
      </div>
    </div>
  );
};

export default SignUpForm;
