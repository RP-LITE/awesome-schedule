import React, { useState } from "react";

import { createUser } from "@/utils/API";
import Auth from "@/utils/Auth";

const SignUpForm = ({closeModal}) => {
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

    // check if form has everything (as per react-bootstrap docs)
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const response = await createUser({
        user: userFormData,
        detail: {
          address: "temp addresss",
        },
      });

      if (!response.ok) {
        console.log(response);
        // throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
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
