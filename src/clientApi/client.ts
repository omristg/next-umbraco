import { BASE_URL } from "@/global/config";
import axios from "axios";

export const contentClient = axios.create({
	baseURL: `${BASE_URL}/umbraco/delivery/api/v2/content`,
});
