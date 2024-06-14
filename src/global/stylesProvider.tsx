import theme from "@/styles/theme/mui.theme";
import { ThemeProvider } from "@mui/material";

const StylesProvider = ({ children }: React.PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default StylesProvider;
