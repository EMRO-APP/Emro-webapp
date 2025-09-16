import axios from "axios";


const unAuthorizedApi = axios.create({
  baseURL: "https://emro-gateway-service-staging.up.railway.app",
  headers: { "Content-Type": "application/json" },
});

export default unAuthorizedApi;
