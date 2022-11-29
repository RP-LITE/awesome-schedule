import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/utils/UserContext";

import Calendar from "@/components/Calendar/Calendar";

export default function Client() {
  const context = useContext(UserContext);
  const profile = context.Auth.profile;
  return (
    <div
      className={
        context.Auth.loggedIn ? "page-container" : "page-container-logged-out"
      }
    >
      <div className='content-wrap'>
        <div className=' welcomeUser flex items-center justify-center bg-lightblue text-3xl pt-5'>
          <h3>Welcome, {profile.data.username}</h3>
        </div>
        <section className='page-container-db'>
          <Calendar />
        </section>
      </div>
    </div>
  );
}
