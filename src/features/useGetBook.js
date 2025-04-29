import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetBook = () => {
  const queryClient = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const response = await axios.get(`https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien`);
      if (!response.data) {
        throw new Error("NOT FOUND");
      }
      return response.data;
    },
  });

  return queryClient;
};

export default useGetBook;
