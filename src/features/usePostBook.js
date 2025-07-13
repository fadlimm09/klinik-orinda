// useCreateBook.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"; // optional, kalau mau pakai toast

const useCreateBook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {
      // <<< tambahkan 'json' di sini
      const response = await axios.post("https://686fbba191e85fac42a24ef2.mockapi.io/BookingPasien/Booking_pasien", json);
      return response.data;
    },
    onSuccess: () => {
      console.log("Success booking");
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
    onError: (error) => {
      console.error("Error: ", error);
    },
  });

  return mutation;
};

export default useCreateBook;
