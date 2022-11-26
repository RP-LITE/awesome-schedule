import { Navigate } from "react-router-dom";
import Auth from "../utils/Auth";

const ProtectedRoute = ({ children }) => {
  const profile = Auth.profile;
  if (!profile) {
    return <Navigate to='/' replace />;
  }
  //   console.log(children[0].type.name);
  //   console.log(user);
  if (profile.data.accountType === "client") {
    return children[0];
  } else if (profile.data.accountType === "provider") {
    return children[1];
  }
};

export default ProtectedRoute;
