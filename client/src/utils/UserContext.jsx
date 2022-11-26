import React , { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from './Auth';
const defaultValues = {
  user: {},
  Auth
};

export const UserContext = createContext(defaultValues);

export const UserProvider = function({ children }) {
  const navigate = useNavigate();
  const setUser = (obj) => {
    setState({...state,user:obj});
  };
  const clearUser = () => {
    setState({...state,user:{}});
  };
  const login = async (loginDetails) => {
    const response = await Auth.login(loginDetails);
    setUser(response.user);
    navigate('/dashboard');
    return response;
  };
  const logout = () => {
    clearUser();
    Auth.logout();
  };

  const signup = async (signupDetails) => {
    const response = await Auth.signup(signupDetails);
    setUser(response.user);
    navigate('/dashboard');
    return response;
  }

  const userObj = {
    ...defaultValues,
    setUser,
    clearUser,
    login,
    logout,
    signup
  };

  const [ state, setState ] = useState(userObj);

  return (
    <UserContext.Provider value={state}>
      { children }
    </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;