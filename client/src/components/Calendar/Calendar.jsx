import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { UserContext } from "@/utils/UserContext";
import { useEffect } from "react";

import "./Calendar.css";

const Calendar = ({isProvider}) => {
  const context = useContext(UserContext);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const aTrig = async () => {
      await context?.getSchedule();
    };
    aTrig();
  }, []);
  return (
    <ul className='agenda'>
      {Object.keys(context?.user?.schedule || {}).length ? (
        Object.entries(context?.user?.schedule).reduce(
          (events, [day, hours]) => {
            const hoursElements = hours.map((hour) => {
              return (
                <li key={hour._id}>
                  <span className='hour'>{hour.time}</span>
                  {/* Replace the button with a modal to display the appointment details. */}
                  <button className="mainButton">
                    <h4>{ hour.name }</h4>
                    {
                      isProvider ?
                        <span className="location">{hour.clientName}</span> :
                        <span className="location">{hour.locationName} : { hour.location }</span>
                    }
                  </button>
                </li>
              );
            });
            events.push(
              <li key={day} className='agenda--day'>
                <h3>{day}</h3>
                <ul>{hoursElements}</ul>
              </li>
            );
            return events;
          },
          []
        )
      ) : (
        <span className='p-10'>No Services scheduled</span>
      )}
    </ul>
  );
};

export default Calendar;
