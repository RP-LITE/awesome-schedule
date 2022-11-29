import React, { useState } from "react";
import "../modal.css";
import { findOneProvider } from "../../../utils/API";
import ModalTemp from "../ModalTemplate";

const ProviderMenu = ({ providers, setSelected }) => {
  const [provider, setProvider] = useState([]);
  const listen = async (event) => {
    const response = await findOneProvider(event.target.dataset.id);
    if (response === null) {
    } else {
      const tempData = [
        {
          service: "haircut",
        },
      ];
      setProvider(response);
    }
  };

  return (
    <>
      {provider.length > 0 ? (
        <div>Provider Info</div>
      ) : providers ? (
        providers.map((provider) => (
          <div className='providerInfo' key={provider._id}>
            <button
              data-id={provider._id}
              className='submitBtn'
              onClick={listen}
            >
              {provider.username} -
              <span className='font-thin italic'>
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
  //  providers ? (
  //   providers.map((provider) => {
  //     return (
  //       <div className='providerInfo' key={provider._id}>
  //         <button data-id={provider._id} classname='submitBtn' onClick={listen}>
  //           {provider.username} -
  //           <span className='font-thin italic'>
  //             Click to see offered services
  //           </span>
  //         </button>
  //       </div>
  //     );
  //   })
  // ) : (
  //   <div>No local providers!</div>
  // );
};

export default ProviderMenu;
