import React, { useState, useContext } from 'react';

import { UserContext } from '@/utils/UserContext';

import CreateService from '@/components/modals/CreateService';
import ServiceProvider from '@/components/modals/ServiceProvider';
import ServiceClient from '@/components/modals/ServiceClient';
import { useEffect } from 'react';

export default function ProviderServices({isProvider}){
  const context = useContext(UserContext);
  const ModalToUse = isProvider ?
    ServiceProvider :
    ServiceClient;
  useEffect(()=>{
    console.log('service effect');
    const aTrig = async () =>{
      await context.getServices(
        isProvider ?
          context.user._id :
          context.providerID
        );
    }
    aTrig();
  },[]);
  return (
    <>
      {
        isProvider ?
          <CreateService /> :
          null
      }
      <ul>
        {
          context?.detail?.services && context.detail.services.map(service => {
            return (
              <li key={service._id}>
                {/* {service.name} */}
                <ModalToUse service={service}/>
              </li>
            )
          })
        }
      </ul>
    </>

  );
};