// useCreateBook.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios"; // optional, kalau mau pakai toast

const useCreateBook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {
      // <<< tambahkan 'json' di sini
      const response = await axios.post("https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien", json);
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
