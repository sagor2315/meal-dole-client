import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic/useAxiosPublic";
import useAuthentication from "./useAuthentication";

const useAddMeals = () => {
  const axiosPublic = useAxiosPublic();
  const { users } = useAuthentication();
  const { refetch, data: allMeals = [] } = useQuery({
    queryKey: ["addMeals", users?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/addMeals`);
      const data = res.data;
      //   console.log(data);
      return data;
    },
  });
  return [allMeals, refetch];
};

export default useAddMeals;
