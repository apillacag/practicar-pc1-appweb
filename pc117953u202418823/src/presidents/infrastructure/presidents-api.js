import axios from "axios";
import "@/presidents/infrastructure/presidents-resources.js";
import {errorInterceptor} from "@/shared/infrastructure/error.interceptor.js";

const presidentsApiUrl = import.meta.env.VITE_PRESIDENTS_API_URL;
const presidentsEndpoint = import.meta.env.VITE_PRESIDENTS_ENDPOINT_PATH;

const http = axios.create({baseURL: presidentsApiUrl});

http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);

export class PresidentsApi {
    getPresidents = () => http.get(`${presidentsEndpoint}`);
}
