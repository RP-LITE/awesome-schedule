import React, { useState } from "react";

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";

const LoginForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    password: "",
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
      const response = await loginUser(userFormData);

      if (!response.ok) {
        console.log(response);
        throw new Error("something went wrong!");
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
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          placeholder='Username'
          id='signUpUname'
          name='username'
          onChange={handleInputChange}
          value={userFormData.username}
          required
        ></input>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          placeholder='********'
          id='signUpPW'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required
        ></input>
        <button
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
