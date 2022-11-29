import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Auth from "./Auth";
import * as API from "./API";
const defaultValues = {
  user: {},
  detail: {},
  provider: {},
  Auth,
};

export const UserContext = createContext(defaultValues);

export const UserProvider = function ({ children }) {
  const navigate = useNavigate();
  const setUser = (obj) => {
    setState({ ...state, user: obj });
  };
  const clearUser = () => {
    setState({ ...state, user: {} });
  };
  const login = async (loginDetails) => {
    const response = await Auth.login(loginDetails);
    setUser(response.user);
    navigate("/dashboard");
    return response;
  };
  const logout = () => {
    clearUser();
    Auth.logout();
  };

  const signup = async (signupDetails) => {
    const response = await Auth.signup(signupDetails);
    setUser(response.user);
    navigate("/dashboard");
    return response;
  };

  const getSchedule = async () => {
    const baseSchedule = await API.getSchedule();
    const schedule = baseSchedule
      .sort((a, b) => {
        return a.start - b.start;
      })
      .reduce((memo, event) => {
        const epoch = event.start * 60 * 1000; //Convert minutes to milliseconds
        const UTC = new Date(epoch);
        const calendarDate = new Intl.DateTimeFormat("en-us").format(UTC);
        memo[calendarDate] = memo[calendarDate] || [];
        const formattedEvent = {
          _id: event._id,
          name: event.service.name,
          clientName: event.client.username,
          locationName: event.provider.username,
          location: event.provider.provider.address,
          time: new Intl.DateTimeFormat("en-us", { timeStyle: "short" }).format(
            event.start * 60 * 1000
          ),
        };
        memo[calendarDate].push(formattedEvent);
        return memo;
      }, {});
    setState({
      ...state,
      user: {
        ...state.user,
        schedule,
      },
    });
  };

  const createService = async (userFormData) => {
    const detail = await API.createService(userFormData);
    setState({
      ...state,
      detail,
    });
    return services;
  };

  const getServices = async (providerID) => {
    const services = await API.getServices(providerID);
    if (Array.isArray(detail?.services)) {
      setState({
        ...state,
        detail,
      });
    }
  };

  const editService = async (serviceID, data) => {
    const services = await API.editService(serviceID, data);
    setState({
      ...state,
      detail: {
        ...state.detail,
        services,
      },
    });
  };

  const deleteService = async (serviceID) => {
    const services = await API.deleteService(serviceID);
    setState({
      ...state,
      detail: {
        ...state.detail,
        services,
      },
    });
  };

  const setProvider = (provider) => {
    setState({
      ...state,
      provider,
      detail: provider.provider,
    });
  };

  const userObj = {
    ...defaultValues,
    setUser,
    clearUser,
    login,
    logout,
    signup,
    getSchedule,
    createService,
    getServices,
    editService,
    deleteService,
    setProvider,
  };

  const [state, setState] = useState(userObj);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
export const UserConsumer = UserContext.Consumer;
