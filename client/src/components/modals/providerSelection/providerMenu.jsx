import React, { useState, useContext, useEffect } from "react";
import "../modal.css";
import { findOneProvider } from "../../../utils/API";
import ModalTemp from "../ModalTemplate";
import { UserContext } from "@/utils/UserContext";
import ServiceClient from "../ServiceClient";

const ProviderMenu = ({ providers, setSelected }) => {
  const context = useContext(UserContext);
  const [provider, setProvider] = useState({});
  const providerHandler = async (event) => {
    const response = await findOneProvider(event.target.dataset.id);
    if (response === null) {
    } else {
      const tempData = [
        {
          service: "haircut",
        },
      ];
      context.setProvider(response);
    }
  };

  return (
    <>
      {context.provider._id ? (
        <ServiceClient />
      ) : providers ? (
        providers.map((provider) => (
          <div className='providerInfo' key={provider._id}>
            <button
              data-id={provider._id}
              className='sidebarlink bg-red sidebarlink2 py-2 my-2'
              onClick={providerHandler}
            >
              {provider.username} -
              <span className='font-thin italic text-xs'>
                Click to see offered services
              </span>
            </button>
          </div>
        ))
      ) : (
        <div>No local providers!</div>
      )}
    </>
  );
};

export default ProviderMenu;
