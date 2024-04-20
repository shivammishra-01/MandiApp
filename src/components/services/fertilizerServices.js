import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/fertilizer';

export const listFertilizer = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createFertilizer = (fertilizer) =>{
    return axios.post(REST_API_BASE_URL, fertilizer, { headers: { 'Content-Type': 'multipart/form-data' } });
}


