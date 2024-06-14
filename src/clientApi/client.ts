import { BASE_URL } from "@/global/config";
import axios from "axios";

export const contentClient = axios.create({
	baseURL: `${BASE_URL}/umbraco/delivery/api/v2/content`,
});

export const authClient = axios.create({
	baseURL: `${BASE_URL}/api/LoginApi`,
	withCredentials: true,
});
