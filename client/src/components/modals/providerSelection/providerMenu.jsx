import React from "react";

const ProviderMenu = ({ providers, setSelected }) => {
  const listen = (event) => {
    console.log("listening", event);
  };

  return providers ? (
    providers.map((provider) => {
      return (
        <div className='providerInfo' key={provider._id}>
          <button onClick={listen}>{provider.username}</button>
        </div>
      );
    })
  ) : (
    <div></div>
  );
};

export default ProviderMenu;
