import * as React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/global/config";

const Providers = ({ children }: React.PropsWithChildren<{}>) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default Providers;
