import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/utils/UserContext";

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
          Provider Dashboard --------
        </section>
      </div>
    </div>
  );
}
