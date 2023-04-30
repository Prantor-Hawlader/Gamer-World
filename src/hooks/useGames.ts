import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Games {
  id: number;
  name: string;
}
interface FecthGamesResponse {
  counts: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<FecthGamesResponse>("/games", {signal : controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message)});


      return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
