import { UserContext } from "@/utils/UserContext";
import React, { useEffect, useState, useContext } from "react";
import ModalTemp from "./ModalTemplate";
import ServiceInfoModal from "./ServiceInfoModal";

export default function ServiceClient({ service }) {
  const context = useContext(UserContext);

  return (
    <div className='providerServices'>
      <h3>{context.provider.user.username}</h3>
      <ul>
        {context?.provider?.services &&
          context.provider.services.map((service) => {
            return (
              <li key={service._id}>
                <ModalTemp
                  title={service.name}
                  className='sidebarlink bg-red sidebarlink2 py-2 my-2'
                  modalTitle={service.name}
                >
                  <ServiceInfoModal
                    service={service}
                    provider={context.provider}
                  />
                </ModalTemp>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
