import React , { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from './Auth';
import * as API from './API';
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
  };

  const getSchedule = async ()=>{
    const schedule = (await API.getSchedule())
      .sort((a,b) => {
        return a.start - b.start;
      })
      .reduce((memo,event) => {
        const epoch = event.start * 60 * 1000;//Convert minutes to milliseconds
        const UTC = new Date(epoch);
        const calendarDate = new Intl.DateTimeFormat('en-us').format(UTC);
        memo[calendarDate] = memo[calendarDate] || [];
        const formattedEvent = {
          _id:event._id,
          name:event.service.name,
          locationName:event.provider.username,
          location:event.provider.provider.address,
          time: new Intl.DateTimeFormat('en-us',{timeStyle:'short'})
            .format(event.start * 60 * 1000)
        };
        memo[calendarDate].push(formattedEvent);
        return memo;
      },{});
    setState({
      ...state,
      user:{
        ...state.user,
        schedule
      }
    });
  };

  const userObj = {
    ...defaultValues,
    setUser,
    clearUser,
    login,
    logout,
    signup,
    getSchedule
  };

  const [ state, setState ] = useState(userObj);

  return (
    <UserContext.Provider value={state}>
      { children }
    </UserContext.Provider>
  );
}
export const UserConsumer = UserContext.Consumer;