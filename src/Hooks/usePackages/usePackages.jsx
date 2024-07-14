import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const usePackages = () => {
  const axiosSecure = useAxiosSecure();
  const { data: memPackages = [], refetch } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const res = await axiosSecure.get("/paymentPackages");
      const data = res.data;
      return data;
    },
  });
  return [memPackages, refetch];
};

export default usePackages;
