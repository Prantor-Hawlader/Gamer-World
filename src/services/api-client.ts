import axios from "axios";

export interface FetchResponse<T> {
    count : number,
   results : T[]
}
export default axios.create({

    baseURL : 'https://api.rawg.io/api',
    params : {
       key : 'a9f25bb2529242999f12b389398a8870'
    }
})