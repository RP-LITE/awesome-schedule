import React, { useState, useEffect, useContext } from "react";

import ModalTemp from "./ModalTemplate";

import { UserContext } from "@/utils/UserContext";

const dateTimeConvert = (d) => {
  const localD = new Date(
    Math.round((d.getTime() - d.getTimezoneOffset() * 60000) / 60 / 1000) *
      60 *
      1000
  );
  return localD.toISOString().slice(0, -1);
};
const ServiceInfoModal = ({ service, provider }) => {
  const context = useContext(UserContext);
  const [now, setNow] = useState(dateTimeConvert(new Date()));
  const [userFormData, setUserFormData] = useState({
    start: "",
  });

  const handleScheduleAppt = (e) => {
    e.preventDefault();
    const epochStart = new Date(userFormData.start).getTime() / 60 / 1000; //Convert time to epoch minutes
    context.scheduleAppt(context, { _id: service._id, start: epochStart });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  useEffect(() => {
    const intervalID = setInterval(
      () => setNow(dateTimeConvert(new Date())),
      15 * 60 * 1000 //15 minutes
    );
    return () => clearInterval(intervalID);
  }, []);
  return (
    <form className='service-info flex flex-col'>
      <h1 className='service-name text-center text-2xl mb-4'>{service.name}</h1>
      <ul className='service-info grid grid-cols-2 p-2 m-2 text-center text-sm'>
        <li className='px-2 py-1 border-b'>Location:{provider.address}</li>
        <li className='px-2 py-1 border-l border-b'>Cost: ${service.cost}</li>
        <li className='px-2 py-1'>Duration: {service.duration} minutes</li>
        <li className='px-2 py-1 border-l'>
          Description: {service.description}
        </li>
      </ul>
      <div className='labelInput'>
        <label className='label start' htmlFor='start'>
          When:
        </label>
        <input
          min={now}
          className='inputBox'
          type='datetime-local'
          placeholder='Start Time'
          id='start'
          name='start'
          onChange={handleInputChange}
          value={userFormData.start}
          required
        ></input>
      </div>
      <div className='action-buttons flex justify-center items-center'>
        <button
          className='sidebarlink bg-red sidebarlink2 mt-4 text-lg'
          onClick={handleScheduleAppt}
        >
          Schedule
        </button>
      </div>
    </form>
  );
};

export default ServiceInfoModal;
