import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useUpcomingMealLikeCounter = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: upcomingLikeCounter = [] } = useQuery({
    queryKey: ["upcomingMealLikeCounter"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingLikeCounter");
      const data = res.data;
      return data;
    },
  });
  return [upcomingLikeCounter, refetch];
};

export default useUpcomingMealLikeCounter;
