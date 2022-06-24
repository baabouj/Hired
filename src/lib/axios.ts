import axios from "axios";
import BACKEND_API_URL from "@/constants/backend-api-url";

export default axios.create({
  baseURL: BACKEND_API_URL,
});
