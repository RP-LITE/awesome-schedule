import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Auth from "../utils/Auth";
import { useContext } from "react";
import { UserContext } from "@/utils/UserContext";

export const ProtectedRoute = ({ children }) => {
  const context = useContext(UserContext);
  const profile = context.Auth.profile;
  if (!profile) {
    return <Navigate to='/' replace />;
  } else {
    const profile = context.Auth.profile;
    if (profile.data.accountType === "client") {
      return children[0];
    } else if (profile.data.accountType === "provider") {
      return children[1];
    }
  }
};

export const SideBarProt = ({ children }) => {
  const context = useContext(UserContext);
  if (context.Auth.loggedIn) {
    return <Sidebar />;
  }
};
