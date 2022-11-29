import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { UserContext } from "@/utils/UserContext";

import Calendar from '@/components/Calendar/Calendar';
import ProviderServices from '@/components/ProviderServices';

export default function Provider() {
  const context = useContext(UserContext);
  return (
    <div
      className={
        context.Auth.loggedIn ? "page-container" : "page-container-logged-out"
      }
    >
      <div className='content-wrap'>
        <section className='page-container-db-p'>
      <nav>
        <NavLink to='/dashboard'>Schedule</NavLink>
        <NavLink to='/dashboard/services'>Services</NavLink>
      </nav>
      <Routes>
        <Route
          path='services'
          element={<ProviderServices isProvider={true} />}
        />
        <Route
          path=''
          element={<Calendar isProvider={true} />}
        />
      </Routes>
        </section>
      </div>
    </div>
  );
}
