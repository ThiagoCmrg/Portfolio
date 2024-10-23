import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#778899',
        },
        secondary: {
            main: '#A9A9A9',
        },
    },
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
        ].join(','),
    }
});

theme = responsiveFontSizes(theme);

export default theme;