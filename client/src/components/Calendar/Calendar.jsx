import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

import { loginUser } from "@/utils/API";
import Auth from "@/utils/Auth";
import { useUserContext } from '@/utils/UserContext';

const Calendar = () => {
  const { user } = useUserContext();
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    view:'month',
    date:Date.now(),
  });

  return ();
};

export default Calendar;
