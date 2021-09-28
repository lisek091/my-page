import { createTheme } from '@mui/material/styles';
import { deepOrange, blue } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: {
            main: deepOrange[900],
        },
        secondary: {
            main: blue[900],
        },
    },
});



export default theme;