import { QueryClient } from "react-query";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const queryClient = new QueryClient();
export const BASE_URL = "https://localhost:44398";
