import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";
import useAuthentication from "../useAuthentication";

const useReviewsGetData = () => {
  const axiosPublic = useAxiosPublic();
  const { users } = useAuthentication();
  const { refetch, data: reviewsDataAll = [] } = useQuery({
    queryKey: ["reviewsData"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/addReviewData/?userEmail=${users?.email}`
      );
      const data = res.data;
      // console.log(data);
      return data;
    },
  });
  return [reviewsDataAll, refetch];
};

export default useReviewsGetData;
