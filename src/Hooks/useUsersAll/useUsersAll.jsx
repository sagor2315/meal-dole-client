import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../useAxiosSecure";

const useUsersAll = () => {
  //   const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { data: usersAll = [], refetch } = useQuery({
    queryKey: ["usersAll"],
    queryFn: async () => {
      const res = await axiosSecure.get("/usersData");
      const data = res.data;
      return data;
    },
  });
  return [usersAll, refetch];
};

export default useUsersAll;
