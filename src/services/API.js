import { API_KEY, BASE_URL } from "../api/config"

export const GET = async (url) => {
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`

    let response = await fetch(API_URL, {mehtod: 'GET'})

    response = response.json();

    return response;
};