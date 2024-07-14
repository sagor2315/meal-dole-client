import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useAllMealRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { data: mealRequestAll = [], refetch } = useQuery({
    queryKey: ["mealRequestAll"],
    queryFn: async () => {
      const res = await axiosSecure.get("/mealRequestAll");
      const data = res.data;
      return data;
    },
  });
  return [mealRequestAll, refetch];
};

export default useAllMealRequest;
