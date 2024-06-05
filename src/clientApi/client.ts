import axios from "axios";

export const BASE_URL = "https://localhost:44398";

export const contentClient = axios.create({
	baseURL: `${BASE_URL}/umbraco/delivery/api/v2/content`,
});
