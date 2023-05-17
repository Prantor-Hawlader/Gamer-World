import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";


export interface Platform {
    id : number ;
    name : string;
    slug : string;
}





const usePlatforms = () => useQuery<FetchResponse<Platform>>({

    queryKey : ["platforms"],
    queryFn : () => apiClient.get("/platforms/lists/parents").then(res => res.data)
    , staleTime : 24* 60* 60* 1000  //24hours
     , initialData : {count : platforms.results.length,results : platforms.results }  
});

export default usePlatforms;