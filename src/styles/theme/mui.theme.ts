import { createTheme } from "@mui/material";

export default createTheme({
	components: {
		MuiFormControl: {
			styleOverrides: {
				root: {
					width: "100%",
				},
			},
		},
	},
});
