import Auth from "./Auth";
const jsonFetch = ({
  route,
  method,
  headers = { "Content-Type": "application/json" },
  body,
}) => {
  return fetch(route, {
    method,
    headers,
    body,
  }).then((r) => r.json());
};

export const createUser = (userData) =>
  jsonFetch({
    route: "/api/users",
    method: "POST",
    body: JSON.stringify(userData),
  });

export const loginUser = (userData) =>
  jsonFetch({
    route: "/api/users/login",
    method: "POST",
    body: JSON.stringify(userData),
  });

// CREATE NEW SERVICE ROUTE
export const createService = (details) =>
  jsonFetch({
    route: "/api/users/service",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
    body: JSON.stringify(details),
  });
//GET ALL SERVICES ROUTE
export const getServices = (providerID) =>
  jsonFetch({
    route: `/api/users/service/${providerID}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    }
  });

export const editService = (serviceID,data) => 
  jsonFetch({
    route: `/api/users/service/${serviceID}`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
    body:JSON.stringify(data)
  });

export const deleteService = (serviceID) => 
  jsonFetch({
    route: `/api/users/service/${serviceID}`,
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    }
  })

//SCHEDULE APPOINTMENT ON A SERVICE
export const scheduleAppt = (providerID,serviceInfo) =>
  jsonFetch({
    route: `/api/users/schedule/${providerID}`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
    body:JSON.stringify(serviceInfo)
  });

export const getSchedule = () =>
  jsonFetch({
    route: "/api/users/schedule",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
  });

//GET ALL PROVIDERS
export const findProviders = () =>
  jsonFetch({
    route: "/api/users/service/providers",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
  });

export const findOneProvider = (providerInfo) =>
  jsonFetch({
    route: "/api/users/service/" + providerInfo,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
  });
