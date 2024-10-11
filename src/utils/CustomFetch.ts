import axios from 'axios';


const productionUrl = 'https://strapi-store-server.onrender.com/api';


export const CustomFetch = axios.create({
    baseURL: productionUrl
})