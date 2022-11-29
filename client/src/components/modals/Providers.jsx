import React, { useEffect, useState, useContext } from "react";

import ProviderMenu from "@/components/modals/providerSelection/ProviderMenu";
import { UserContext } from "@/utils/UserContext";

import { findProviders } from "@/utils/API";

export const Providers = () => {
  const context = useContext(UserContext);
  const [providers, setProviders] = useState([]);
  // const [selectedProvider, setSelected] = useState({});
  useEffect(() => {
    const getProviders = async () => {
      const awaitedProviders = await findProviders();

      setProviders(Array.isArray(awaitedProviders) ? awaitedProviders : []);
    };
    getProviders();
  }, []);

  return <ProviderMenu providers={providers} />;
};
