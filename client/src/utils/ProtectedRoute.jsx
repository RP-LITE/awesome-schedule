import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Auth from "../utils/Auth";

export const ProtectedRoute = ({ children }) => {
  const profile = Auth.profile;
  if (!profile) {
    return <Navigate to='/' replace />;
  } else {
    const profile = Auth.profile;
    if (profile.data.accountType === "client") {
      return children[0];
    } else if (profile.data.accountType === "provider") {
      return children[1];
    }
  }
};

export const SideBarProt = ({ children }) => {
  if (Auth.loggedIn) {
    return <Sidebar />;
  }
};
