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
  const setUser = (context,obj) => {
    setState({ ...context, user: obj });
  };
  const clearUser = () => {
    setState({ ...context, user: {} });
  };
  const login = async (context,loginDetails) => {
    
    const response = await Auth.login(loginDetails);
    setUser(context,response.user);
    navigate("/dashboard");
    return response;
  };
  const logout = () => {
    clearUser();
    Auth.logout();
  };

  const signup = async (context,signupDetails) => {
    const response = await Auth.signup(signupDetails);
    setUser(context,response.user);
    navigate("/dashboard");
    return response;
  };

  const sortSchedule = (context,baseSchedule) => {
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
      ...context,
      user: {
        ...context.user,
        schedule,
      },
    });
  };

  const getSchedule = async (context) => {
    const baseSchedule = await API.getSchedule();
    sortSchedule(context,baseSchedule);
  };

  const createService = async (context,userFormData) => {
    const detail = await API.createService(userFormData);
    setState({
      ...context,
      detail,
    });
    return detail;
  };

  const getServices = async (context,providerID) => {
    const detail = await API.getServices(providerID);
    if (Array.isArray(detail?.services)) {
      setState({
        ...context,
        detail,
      });
    }
  };

  const editService = async (context,serviceID, data) => {
    const services = await API.editService(serviceID, data);
    setState({
      ...context,
      detail: {
        ...context.detail,
        services,
      },
    });
  };

  const deleteService = async (context,serviceID) => {
    const services = await API.deleteService(serviceID);
    setState({
      ...context,
      detail: {
        ...context.detail,
        services,
      },
    });
  };

  const setProvider = (context,provider) => {
    
    setState({
      ...context,
      provider,
      detail: provider.provider,
    });
  };

  const scheduleAppt = async (context,details) => {
    const schedule = await API.scheduleAppt(context.provider.user._id,details);
    sortSchedule(context,schedule);
  }

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
    scheduleAppt
  };

  const [state, setState] = useState(userObj);

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};
export const UserConsumer = UserContext.Consumer;
