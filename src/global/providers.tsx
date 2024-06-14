import * as React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/global/config";
import GlobalStyles from "@/styles/GlobalStyles";



const Providers = ({ children }: React.PropsWithChildren<{}>) => (
	<QueryClientProvider client={queryClient}>
		<GlobalStyles />
		{children}
	</QueryClientProvider>
);

export default Providers;
