import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
import useAuthentication from "../useAuthentication";

const useMealsRequest = () => {
  const { users } = useAuthentication();
  const axiosSecure = useAxiosSecure();
  const { data: mealRequest = [], refetch } = useQuery({
    queryKey: ["mealRequest"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/mealRequest?userEmail=${users?.email}`
      );
      const data = res.data;
      return data;
    },
  });
  return [mealRequest, refetch];
};

export default useMealsRequest;
