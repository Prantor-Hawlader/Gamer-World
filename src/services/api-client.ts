import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count : number,
   results : T[]
}
const axiosInstance=  axios.create({

    baseURL : 'https://api.rawg.io/api',
    params : {
       key : 'a9f25bb2529242999f12b389398a8870'
    }




})


class  APIClient<T> {
    endpoint : string

    constructor(endpoint:string){
        this.endpoint = endpoint
    }


    getAll =(config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(res => res.data)

    }

}

export default APIClient