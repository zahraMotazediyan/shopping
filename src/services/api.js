import axios from "axios";


const URL_BASE = "https://fakestoreapi.com";

const getProduct = async () => {
    const response = await axios.get(`${URL_BASE}/Products`);
    return response.data;
}

export {getProduct};