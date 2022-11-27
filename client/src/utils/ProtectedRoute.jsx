import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Auth from "../utils/Auth";

export const ProtectedRoute = ({ children }) => {
  if (Auth.profile?.data?.accountType === "client") {
    return children[0];
  } else if (Auth.profile?.data?.accountType === "provider") {
    return children[1];
  }else{
    return navigate('/');
  }
};

export const SideBarProt = ({ children }) => {
  if (Auth.loggedIn) {
    return <Sidebar />;
  }
};
