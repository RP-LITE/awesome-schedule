import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { UserContext } from "@/utils/UserContext";

import Calendar from "@/components/Calendar/Calendar";
import ProviderServices from "@/components/ProviderServices";

export default function Provider() {
  const context = useContext(UserContext);
  const profile = context.Auth.profile;
  return (
    <div
      className={
        context.Auth.loggedIn ? "page-container" : "page-container-logged-out"
      }
    >
      <div className='content-wrap'>
        <section className='page-container-db-p'>
          <div className='welcomeUser flex items-center justify-center bg-yellow text-3xl pt-5'>
            <h3>Welcome, {profile.data.username}</h3>
          </div>
          <nav className='flex flex-row justify-center items-center text-2xl my-4'>
            <NavLink
              className='mx-2 rounded bg-red px-3 py-1 hover:bg-lightblue transition-colors'
              to='/dashboard'
            >
              Schedule
            </NavLink>
            <NavLink
              className='mx-2 rounded bg-red px-3 py-1 hover:bg-lightblue transition-colors'
              to='/dashboard/services'
            >
              Services
            </NavLink>
          </nav>
          <Routes>
            <Route
              path='services'
              element={<ProviderServices isProvider={true} />}
            />
            <Route path='' element={<Calendar isProvider={true} />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}
