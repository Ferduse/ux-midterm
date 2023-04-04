import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Paper, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material';

import waitingroom from './img/derm-waitingroom.jpeg';

const theme = createTheme({
    palette: {
      primary: {
        main: "#187bcd",
      },
      secondary: lightBlue,
    },
    typography: {
      fontFamily: "Roboto",
      h1: {
        fontSize: "3rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.30rem",
        fontWeight: 500,
      },
    }
});

function Request(){
    <ThemeProvider theme={theme}>
        <Container>
            <Typography variant='h1'
            >
                Hello
            </Typography>
        </Container>
        <div>
            <p>hey</p>
        </div>

    </ThemeProvider>
}

export default Request;