import React, { useState } from "react";

const ServiceInfoModal = () => {
  return (
    
        <div className='service-info'>
          <h1 className='service-name'>Service Name</h1>
          <h2 className='service-provider'>Provider Here</h2>
          <ul className='service-info'>
            <li>Location here</li>
            <li>Cost:</li>
            <li>Duration:</li>
          </ul>
          <div className='action-buttons'>
            <button>Schedule</button>
            <button>Reschedule</button>
            <button>Cancel Appointment</button>
          </div>
        </div>
     
  );
};

export default ServiceInfoModal;
