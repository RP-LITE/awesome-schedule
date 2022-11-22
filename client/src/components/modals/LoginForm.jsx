import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";

const LoginForm = ({closeModal}) => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  const [redirect,setRedirect] = useState('');
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
      const response = await loginUser(userFormData);

      if (!response.ok) {
        console.log('response',response);
        throw new Error("something went wrong!");
      }

      const { token, user } = await response.json();
      console.log('user',user);
      Auth.login(token,setRedirect);
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
    redirect ? 
      <Navigate to={redirect} replace/> :
      <div>
        <form className="signForm" onSubmit={handleFormSubmit}>
          <label className="label username" htmlFor='username'>Username</label>
          <input
            type='text'
            placeholder='Username'
            id='signUpUname'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
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
          <button className="submitBtn"
            disabled={!(userFormData.username && userFormData.password)}
            type='submit'
            variant='success'
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default LoginForm;
