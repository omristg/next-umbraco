import * as React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/global/config";
import GlobalStyles from "@/styles/GlobalStyles";
import { AuthProvider } from "@/context/authContext";
import StylesProvider from "./stylesProvider";

const Providers = ({ children }: React.PropsWithChildren<{}>) => (
	<StylesProvider>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles />
				{children}
			</QueryClientProvider>
		</AuthProvider>
	</StylesProvider>
);

export default Providers;
