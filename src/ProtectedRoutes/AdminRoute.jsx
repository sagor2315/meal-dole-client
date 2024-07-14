import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuthentication from "../Hooks/useAuthentication";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import { Spinner } from "@material-tailwind/react";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { users, loading } = useAuthentication();
  const [isAdmin, loadingForAdmin] = useAdmin();
  if (loading || loadingForAdmin) {
    return (
      <div className="flex justify-center items-center h-[500px]">
        <Spinner className="h-16 w-16  text-gray-900/50" />
      </div>
    );
  } else if (users?.email && isAdmin) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
