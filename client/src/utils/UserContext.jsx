import React , { createContext, useContext } from 'react';

export const useUserContext = createContext();

export const UserProvider = ({children}) => {
  const initialUser = {};
  return (
    <UserProvider value={initialUser}>
      {children}
    </UserProvider>
  );
}