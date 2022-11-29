import React, { useEffect, useState, useContext } from "react";

import ProviderMenu from "@/components/modals/providerSelection/ProviderMenu";
import { UserContext } from "@/utils/UserContext";

import { findProviders } from "@/utils/API";
import Auth from "@/utils/Auth";

export const Providers = () => {
  const context = useContext(UserContext);
  const token = context.Auth.getToken;
  const [providers, setProviders] = useState([]);
  // const [selectedProvider, setSelected] = useState({});
  useEffect(() => {
    const getProviders = async () => {
      const awaitedProviders = await findProviders(null, token);

      setProviders(Array.isArray(awaitedProviders) ? awaitedProviders : []);
    };
    getProviders();
  }, []);

  return <ProviderMenu providers={providers} />;
};
