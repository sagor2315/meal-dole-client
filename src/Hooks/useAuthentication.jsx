import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAuthentication = () => {
  const Authentication = useContext(AuthContext);
  return Authentication;
};

export default useAuthentication;
