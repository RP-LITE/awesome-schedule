import React, { useState } from "react";
import { scheduleAppt } from "@/utils/API";
import ModalTemp from "./ModalTemplate";

const ServiceInfoModal = ({ service, provider }) => {
  const handleScheduleAppt = (e) => {
    e.preventDefault();
    scheduleAppt();
  };
  const [userFormData, setUserFormData] = useState({
    start: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <form className='service-info'>
      <h1 className='service-name'>{service.name}</h1>
      <ul className='service-info'>
        <li>Location:{provider.address}</li>
        <li>Cost: ${service.cost}</li>
        <li>Duration: {service.duration} minutes</li>
        <li>Description: {service.description}</li>
      </ul>
      <div className='labelInput'>
        <label className='label start' htmlFor='start'>
          Username
        </label>
        <input
          className='inputBox'
          type='text'
          placeholder='Start Time'
          id='start'
          name='start'
          onChange={handleInputChange}
          value={userFormData.start}
          required
        ></input>
      </div>
      <div className='action-buttons'>
        <button onClick={handleScheduleAppt}>Schedule</button>
      </div>
    </form>
  );
};

export default ServiceInfoModal;
