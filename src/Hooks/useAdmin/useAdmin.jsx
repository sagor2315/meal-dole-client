import { useQuery } from "@tanstack/react-query";
import useAuthentication from "../useAuthentication";
import useAxiosSecure from "../useAxiosSecure";

const useAdmin = () => {
  const { users, loading } = useAuthentication();
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin = [], isPending: loadingForAdmin } = useQuery({
    queryKey: [users?.email, "isAdmin"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is admin", users);
      const res = await axiosSecure.get(`/usersDAta/admin/${users?.email}`);
      // console.log(res.data);
      return res.data?.Admin;
    },
  });
  return [isAdmin, loadingForAdmin];
};

export default useAdmin;
