import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "pt-BR",
  },
  responseType: "json",
});

export default api;
