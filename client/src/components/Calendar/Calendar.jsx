import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { UserContext } from '@/utils/UserContext';
import { useEffect } from "react";

const Calendar = () => {
  const { context } = useContext(UserContext);
  useEffect(()=>{
    context.getSchedule();
  },[]);
  debugger;
  return (
    <ul className="agenda">
      {
        context.schedule?.days?.length ?
          context.schedul?.days.reduce((events,day) => {
            const hours = day.events.map(hour => {
              return (
                <li>
                  <span className="hour">{ hour.time }</span>
                  <button className="mainButton">
                    <h4>{ hour.name }</h4>
                    <span className="location">{ hour.address }</span>
                  </button>
                </li>
              )
            });
            events.push(
              <li class='agenda--day'>
                <h3>day.date</h3>
                <ul>
                  {hours}
                </ul>
              </li>
            );
            return events;
          },[]):
          <span>No Services scheduled</span>
      }
    </ul>
  );
};

export default Calendar;
