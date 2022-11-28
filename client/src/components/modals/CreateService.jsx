import React, { useState, useContext } from "react";

import { UserContext } from "@/utils/UserContext";

import ModalTemp from './ModalTemplate';

const CreateService = function(){
  const context = useContext(UserContext);
  const [userFormData,setUserFormData ] = useState({name:'',cost:0,duration:0,description:''});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // debugger;
    try{
      const response = await context.createService(userFormData);
      debugger;
    }catch(err){
      console.error(err);
      setShowAlert(true);
    }
    // try {
    //   const response = await context.login(userFormData);
    //   if (!response.token || !response.user) {
    //     console.log("response", response);
    //     throw new Error("something went wrong!");
    //   }
    //   navigate("/dashboard");
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }

    // setUserFormData({
    //   username: "",
    //   password: "",
    // });
  };

  return (
    <ModalTemp title='Create a service' modalTitle='Create a Service'>
      <>
        <h3>Offer a new service</h3>
        <form onSubmit={handleFormSubmit}>
          <div className='labelInput'>
            <label className='label name' htmlFor='service-name'>
              Service Name
            </label>
            <input
              type='text'
              placeholder='Service Name'
              id='service-name'
              name='name'
              onChange={handleInputChange}
              value={userFormData.name}
              required
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label duration' htmlFor='service-duration'>
              Service Duration
            </label>
            <input
              type='number'
              placeholder='Service duration'
              id='service-duration'
              name='duration'
              onChange={handleInputChange}
              value={userFormData.duration}
              required
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label cost' htmlFor='service-cost'>
              Service Cost
            </label>
            <input
              type='number'
              placeholder='Service cost'
              id='service-cost'
              name='cost'
              onChange={handleInputChange}
              value={userFormData.cost}
              required
            ></input>
          </div>
          <div className='labelInput'>
            <label className='label description' htmlFor='service-description'>
              Service description
            </label>
            <textarea
              name="description" 
              onChange={handleInputChange}
              id="service-description"
              value={userFormData.description}
              required></textarea>
          </div>
        <button
          className='submitBtn'
          disabled={!(userFormData.name && userFormData.duration && userFormData.cost && userFormData.description)}
          type='submit'
          variant='success'
        >
          Submit
        </button>
        </form>
      </>
    </ModalTemp>
  )
}

export default CreateService;