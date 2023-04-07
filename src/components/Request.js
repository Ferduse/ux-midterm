import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Divider, Typography} from '@mui/material';
import { makeStyles } from '@mui/material';

import waitingroom from './img/derm-waitingroom.jpeg';

const theme = createTheme({
  palette: {
    primary: {
      main: "#187bcd",
      text: "#6D6875",
      back: '#bebebe',
      hover: '#0398dc',
      continue: '#11cb5f'
    },
    secondary: lightBlue,
  },
  typography: {
    fontFamily: "Arial",
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.350rem",
      fontWeight: 500,
    },
    h4: {
      textAlign: "start",
      fontSize: "1.90rem",
    }
  }
});


function Request(){
  return( 
    <ThemeProvider theme={theme}>
        <Container>
            <Typography variant='h4'
            sx={{my:7, textAlign: "center", color: "primary.main"}}

            >
               Appointment Request
            </Typography>

            <Typography variant='h5'sx={{color: "primary.main"}}>

              We would love to get in touch with you!
            </Typography>
            <Box sx={{ m: 3 }}></Box>

            <Divider variant="middle" />
            <Box sx={{ m: 3 }}></Box>

            <Typography variant='h3'sx={{color: "primary.text"}}>

            For appointments, please call (718) 555-6458 on weekdays from 8 AM to 6 PM and on Saturdays from 9 AM to 1 PM. 
            Office hours vary from office to office, but we will try our best to provide appointments as soon as possible. 
            Walk-in visits are accepted but may require extended wait time. 
            Please call our operators for more detailed information about our office.

            </Typography>

            <Box sx={{ m: 5 }}></Box>

            {/* <Divider variant="middle" /> */}
            <Box sx={{ m: 6 }}></Box>

            <Box textAlign={'center'} sx={{ m: 3 , alignItems: "center"}}>
                <Button variant="contained" size='large'>
                  Request an Appointment
                </Button>
              </Box>
              


        </Container>

    </ThemeProvider>
  );
};

export default Request;