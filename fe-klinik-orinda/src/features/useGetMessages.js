//localhost : 3000

import { useQuery } from "react-query";
import axios from "axios";
import { useEffect } from "react";

const useGetMessages = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      const response = await axios.get("localhost:3000/api/messages");
      return response.data;
    },
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching messages:", error);
    }
  }, [error]);

  return { data, isLoading, error };
};
