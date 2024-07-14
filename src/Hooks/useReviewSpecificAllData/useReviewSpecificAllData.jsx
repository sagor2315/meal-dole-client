import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useReviewSpecificAllData = () => {
  const axiosPublic = useAxiosPublic();
  const data = useQuery({
    queryKey: ["reviewSpecificData"],
    queryFn: async () => {
      const res = axiosPublic.get();
    },
  });
  return <div></div>;
};

export default useReviewSpecificAllData;
