import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Divider, Rating, Container, Paper, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material';

import waitingroom from './img/derm-waitingroom.jpeg';

const theme = createTheme({
  palette: {
    primary: {
      main: "#187bcd",
      text: "#6D6875"
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
      fontSize: "2.10rem",
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

function Reviews(){
  return( 
   <ThemeProvider theme={theme}>
            <Container>
              <Typography variant='h4'
                sx={{my:7, textAlign: "center", color: "primary.main"}}

              >
                Reviews
              </Typography>
              <Container>
              <Rating 
                size='large'
                readOnly
                value={5}
                max={5}
                sx={{my: 2, justifyItems: "center"}}

              />
              <Typography variant='h3' sx={{color: "primary.text"}}>
                "I honestly love this office! They are friendly both on the phone and in person. 
                Accommodating when I need to change my scheduled appointment. 

"
              </Typography>
              <Box sx={{ m: 3 }}></Box>
              <Divider variant="middle" />

              </Container>

              <Container>
              <Rating 
                size='large'
                readOnly
                value={4}
                max={5}
                sx={{my: 2, justifyItems: "center"}}

              />
              <Typography variant='h3' sx={{color: "primary.text"}}>
                I think they are all great, intelligent, and good doctors. They listen to you and raise good points. I have been 
                coming here for years! I love their services and attitude. I will always come back! 

              </Typography>
              <Box sx={{ m: 3 }}></Box>
              <Divider variant="middle" />
              </Container>

              <Container>
              <Rating 
                size='large'
                readOnly
                value={5}
                max={5}
                sx={{my: 2, justifyItems: "center"}}

              />
              <Typography variant='h3'sx={{color: "primary.text"}}>
                After years of coping with my horrible cystic acne, I finally visited Dr. Love. She gave me a specific treatment designed to improve my skin.
                After following her instructions, my skin has improved tremendously! Super grateful for Dr. Love! 
              </Typography>
              </Container>
              <Box sx={{ m: 3 }}></Box>
              <Divider variant="middle" />



              <Box textAlign={'center'} sx={{ m: 3 , alignItems: "center"}}>
                <Button variant="contained" size='large'>
                  View More
                </Button>
              </Box>


              </Container>

              
        </ThemeProvider>
        
  );
};

export default Reviews;