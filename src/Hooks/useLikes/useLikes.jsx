import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useLikes = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: likesAll } = useQuery({
    queryKey: ["likes"],
    queryFn: async () => {
      const res = await axiosSecure.get("/likeButton");
      const data = res.data;
      return data;
    },
  });
  return [likesAll, refetch];
};

export default useLikes;
