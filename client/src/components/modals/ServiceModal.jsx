import React, { useState } from "react";

const Modal = ({ closeModal }) => {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button onClick={() => closeModal(false)}> X </button>
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
      </div>
    </div>
  );
};

export default Modal;
