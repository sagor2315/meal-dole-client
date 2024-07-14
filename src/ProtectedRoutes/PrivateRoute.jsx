import { Navigate, useLocation } from "react-router-dom";
import useAuthentication from "../Hooks/useAuthentication";
import { Spinner } from "@material-tailwind/react";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useAuthentication();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16 text-gray-900/50" />
      </div>
    );
  } else if (users?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
