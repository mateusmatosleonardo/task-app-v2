import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function useFetch<T>(url: string){
  const [response, setResponse] = useState<T | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => {
        setResponse(response.data);
      });
  }, []);

  return {response};
}