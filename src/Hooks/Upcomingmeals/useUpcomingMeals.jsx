import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useUpcomingMeals = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: upcomingMeals = [] } = useQuery({
    queryKey: ["upcomingMeal"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingMeal");
      // console.log(res.data);
      return res.data;
    },
  });
  return [upcomingMeals, refetch];
};
export default useUpcomingMeals;
