import React, { useEffect, useState } from "react";

import ProviderMenu from "@/components/modals/providerSelection/ProviderMenu";

import { findProviders } from "@/utils/API";
import Auth from "@/utils/Auth";

export const Providers = () => {
  const token = Auth.getToken();
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelected] = useState({});
  useEffect(() => {
    const getProviders = async () => {
      const awaitedProviders = await findProviders(null, token);

      setProviders(Array.isArray(awaitedProviders) ? awaitedProviders : []);
    };
    getProviders();
  }, []);
  useEffect(() => {}, [selectedProvider]);

  const selectProvider = (event) => {
  };
  return selectedProvider.username ? (
    <div></div>
  ) : (
    <ProviderMenu
      setSelected={selectProvider}
      providers={[
        { username: "static1", _id: "5" },
        { username: "another static", _id: 200 },
      ]}
    />
  );
};
