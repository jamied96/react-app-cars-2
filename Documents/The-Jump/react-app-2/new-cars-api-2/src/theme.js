import { createTheme } from "@mui/material/styles";
// import blue from "@mui/material/colors/blue";
// import grey from '@mui/material/colors/grey';
import red from '@mui/material/colors/red';

let theme = createTheme({
	palette: {
		primary: {
			main: red[900],
		},
		secondary: {
			main: red[50],
			contrastText: red[900]
		},
	},
});

export default theme;
