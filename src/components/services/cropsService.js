import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/crops';

export const listCrops = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createCrops = (crops) =>{
    return axios.post(REST_API_BASE_URL, crops, { headers: { 'Content-Type': 'multipart/form-data' } });
}

// { headers: { 'Content-Type': 'multipart/form-data' } }