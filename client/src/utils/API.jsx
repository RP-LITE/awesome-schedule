export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// CREATE NEW SERVICE ROUTE
export const createService = (details, token) => {
  return fetch("/api/users/service", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  });
};
//GET ALL SERVICES ROUTE
export const getServices = (details, token) => {
  return fetch("/api/users/service", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(details),
  });
};

//SCHEDULE APPOINTMENT ON A SERVICE
export const scheduleAppt = (serviceInfo, token) => {
  return fetch("/api/users/schedule/:providerID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

//GET ONE PROVIDER
export const findProviders = (providerInfo, token) => {
  return fetch("/api/users/service/providers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((s) => s.json());
};
