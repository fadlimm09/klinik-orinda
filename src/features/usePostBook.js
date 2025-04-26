import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useCreateBook = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.post("https://64de412c825d19d9bfb25d14.mockapi.io/bookingPasien", json);
      return await response.data;
    },
    onSuccess: () => {
      console.log("success book");
      queryClient.invalidateQueries({ queryKey: ["book"] });
    },
    onError: () => {
      console.error("Error: ", error);
      toast.error("Failed to add new menu");
    },
  });

  return mutation;
};

export default useCreateBook;
