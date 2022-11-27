import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./modal.css";

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { UserContext } from "@/utils/UserContext";

const LoginForm = ({ closeModal }) => {
  const navigate = useNavigate();
  // set initial form state
  const context = useContext(UserContext);
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
  });
  // const [redirect,setRedirect] = useState('');
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
      const response = await context.login(userFormData);
      if (!response.token || !response.user) {
        console.log("response", response);
        throw new Error("something went wrong!");
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <h3 className='text-3xl font=semibold text-center py-5'>Login!</h3>
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
            value={userFormData.username}
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
        <button
          className='submitBtn'
          disabled={!(userFormData.username && userFormData.password)}
          type='submit'
          variant='success'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginForm;
