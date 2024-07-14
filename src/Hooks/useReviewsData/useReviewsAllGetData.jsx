import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useReviewsAllGetData = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: ReviewsAllGetData = [] } = useQuery({
    queryKey: ["reviewSpecificData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addReviewData");
      const data = res.data;
      return data;
    },
  });
  return [ReviewsAllGetData, refetch];
};

export default useReviewsAllGetData;
