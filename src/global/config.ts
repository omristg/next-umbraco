import { QueryClient } from "react-query";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const queryClient = new QueryClient();

