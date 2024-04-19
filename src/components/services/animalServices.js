import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/api/animal';

export const listAnimal = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createAnimals = (animals) =>{
    return axios.post(REST_API_BASE_URL, animals, { headers: { 'Content-Type': 'multipart/form-data' } });
}


