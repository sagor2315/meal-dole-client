import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../useAxiosSecure";
import useAuthentication from "../useAuthentication";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const usePayments = () => {
  // const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { users } = useAuthentication();
  const { data: paymentsData = [] } = useQuery({
    queryKey: ["paymentsData", users?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/payments/${users.email}`);
      const data = res.data;
      return data;
    },
  });
  return [paymentsData];
};

export default usePayments;
