import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useAddReviews = () => {
  const axiosPublic = useAxiosPublic();
  const { refetch, data: reviewsData = [] } = useQuery({
    queryKey: ["addReviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addReviewData");
      const data = res.data;
      return data;
    },
  });
  return [reviewsData, refetch];
};

export default useAddReviews;
