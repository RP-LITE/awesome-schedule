import Auth from './Auth';
const jsonFetch = ({
  route,
  method,
  headers = {"Content-Type": "application/json"},
  body
}) => {
  return fetch(
    route,
    {
      method,
      headers,
      body
    }
  )
    .then(r => r.json())
};

export const createUser = (userData) => jsonFetch({
  route:"/api/users",
  method: "POST",
  body: JSON.stringify(userData),
});

export const loginUser = (userData) => jsonFetch({
  route:"/api/users/login",
  method: "POST",
  body: JSON.stringify(userData),
});

// CREATE NEW SERVICE ROUTE
export const createService = (details) => jsonFetch({
  route:"/api/users/service",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Auth.token}`,
  },
  body: JSON.stringify(details),
});
//GET ALL SERVICES ROUTE
export const getServices = (details) =>  jsonFetch({
  route:"/api/users/service",
  method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${Auth.token}`,
    },
    body: JSON.stringify(details),
  });

//SCHEDULE APPOINTMENT ON A SERVICE
export const scheduleAppt = (serviceInfo) => jsonFetch({
  route:"/api/users/schedule/:providerID",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Auth.token}`,
  }
});

//GET ONE PROVIDER
export const findProviders = (providerInfo) => jsonFetch({
  route:"/api/users/service/providers",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${Auth.token}`,
  }
});
