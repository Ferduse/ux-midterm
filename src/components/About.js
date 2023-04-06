import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Paper, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material';
import Divider from '@mui/material/Divider';
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
      h4: {
        textAlign: "start"
      }
    }
});

function About(){
  return( 
    <ThemeProvider theme={theme}>
        <Container>
            <Typography variant='h2'
            sx={{my:7, textAlign: "center", color: "primary.main"}}
            >
                About Us
            </Typography>

            <Typography variant='h2' sx={{my:7, textAlign: "center", color: "primary.main"}}>
              Our practice is to state-of-the-art, patient-centered care that is appropriate and convenient. Our priorities are ensuring patient safety and providing effective treatments.
              We provide services in general dermatology, pediatric dermatology, skin laser surgery, and cosmetic dermatology.
              All of our physicians are board certified by the American Board of Dermatology.
              We accept most insurances. Our providers and staff speak multiple languages. We open early and have evening and weekend hours in clean and modern facilities.

            </Typography>

            <Typography variant='h4'>
              Languages Spoken
            
            </Typography>

            <Typography variant='h5'>
            English, Spanish, Mandarin, Korean, Bengali, Urdu

            </Typography>
            <Box sx={{ m: 3 }}></Box>

            <Divider variant="middle" />
            <Box sx={{ m: 3 }}></Box>

            



        </Container>

    </ThemeProvider>
  )
}

export default About;