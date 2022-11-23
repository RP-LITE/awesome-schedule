import React, { useState } from "react";
import { scheduleAppt } from "@/utils/API";

const ServiceInfoModal = (props) => {
  const handleScheduleAppt = (e) => {
    e.preventDefault();
    scheduleAppt();
  };

  return (
    <form className='service-info'>
      <h1 className='service-name'>{props}</h1>
      <h2 className='service-provider'>{}</h2>
      <ul className='service-info'>
        <li>Location:{}</li>
        <li>Cost:{}</li>
        <li>Duration:{}</li>
      </ul>
      <div className='action-buttons'>
        <button onClick={handleScheduleAppt}>Schedule</button>
        {/* <button>Reschedule</button> */}
        {/* <button>Cancel Appointment</button> */}
      </div>
    </form>
  );
};

export default ServiceInfoModal;
