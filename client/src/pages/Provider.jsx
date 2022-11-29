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
          <div className=' welcomeUser flex items-center justify-center bg-yellow text-3xl pt-5'>
            <h3>Welcome, {profile.data.username}</h3>
          </div>
          <nav>
            <NavLink to='/dashboard'>Schedule</NavLink>
            <NavLink to='/dashboard/services'>Services</NavLink>
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
