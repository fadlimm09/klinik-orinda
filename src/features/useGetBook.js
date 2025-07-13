import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetBook = () => {
  const queryClient = useQuery({
    queryKey: ["book"],
    queryFn: async () => {
      const response = await axios.get(`https://686fbba191e85fac42a24ef2.mockapi.io/BookingPasien/Booking_pasien`);
      if (!response.data) {
        throw new Error("NOT FOUND");
      }
      return response.data;
    },
  });

  return queryClient;
};

export default useGetBook;
