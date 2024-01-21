import axios from "axios";

const api = axios.create({
  baseURL: "https://alunosapi.azurewebsites.net/api/",
});

export default api;
