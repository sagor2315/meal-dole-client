import axios from "axios";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuthentication from "./useAuthentication";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { LogOutUser } = useAuthentication();
  // console.log(LogOutUser);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logout the user");
          LogOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [LogOutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
