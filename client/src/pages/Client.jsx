import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/utils/UserContext";

import Calendar from "@/components/Calendar/Calendar";

export default function Client() {
  const context = useContext(UserContext);
  return (
    <div
      className={
        context.Auth.loggedIn ? "page-container" : "page-container-logged-out"
      }
    >
      <div className='content-wrap'>
        <section className='page-container-db'>
          <Calendar />
        </section>
      </div>
    </div>
  );
}
