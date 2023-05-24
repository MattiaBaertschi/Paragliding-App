// api.js
import axios from 'axios';

const API_URL = 'https://hoemknoebi.internet-box.ch/api/';

export async function apiGet(endpoint, params, token) {
  try {
    const response = await axios.get(`${API_URL}${endpoint}`, { 
      headers: {'Authorization': `Bearer ${token}`},
      params: params
    });
    const jsonData = response.data;
    console.log(jsonData)
    return jsonData;
  } catch (err) {
    console.log("toloooken",token)
    console.error(err);
  }
}

export async function apiPost(endpoint, data, token, body) {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, body, {
        params: data,
        headers: {'Authorization': `Bearer ${token}`},
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
