import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Grid, Paper, Typography, Rating, Divider, CardContent, CardActions, Stack } from '@mui/material';
import { makeStyles } from '@mui/material';
import { Link } from 'react-router-dom';

// import useStyles from './styles';
// import theme from './styles';
// import Footer from './components/footer';
import waitingroom from './img/derm-waitingroom.jpeg';
import Image from 'mui-image'
import smile from './img/smiling-woman.jpeg'
import smile2 from './img/smile2.jpeg'
import smile3 from './img/smile3.webp'
import smile4 from './img/smile4.jpeg'
import smile5 from './img/smile5.jpg'
import aboutus from './img/aboutus-doc.jpeg'
import apptreq from './img/appt-req.jpeg'





// import MuiImageSlider from 'mui-image-slider';



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


function Home() {
  // const classes = useStyles();

    return (
      
      <ThemeProvider theme={theme}>
        <Container>
          <Typography 
            variant='h1'
            sx={{my:4, textAlign: "center", color: "primary.main"}}
          >
            Glass Skin Dermatology
          </Typography>
          <Typography variant='h2' sx={{textAlign:'center',fontStyle:'italic', color:'primary.hover'}}>

            Let your skin shine
            <Box sx={{ m: 3 }}></Box>

            <Divider variant="middle" />



          </Typography>
          <Typography 
          variant='h4'
          sx={{my:5, textAlign: "center", color: "primary.text"}}
          >
            We are located at the heart of SoHo in New York City
            <Box sx={{ m: 3 }}></Box>

            <Typography variant='h2' sx={{color:"primary.main"}} >
              Call us at (718) 555-6458 

              </Typography>

          </Typography>


    
            <Image src={smile3} />

            <Box>
              <Typography
              variant='h2' sx={{my:7, textAlign: "center", color: "primary.main"}}
              >
                    Trust your skin to us
              </Typography>
            </Box>
            <Box sx={{ m: 3 }}></Box>

<Divider variant="middle" />


            <Grid container my={4} spacing={4}>
              <Grid item xs={6}>
                <Box sx={{boxShadow: 10}} textAlign={"center"} p={5}
                
                >
                  <Typography variant='h2' sx={{my:3, textAlign: "center", color: "primary.main"}}
              
                  >
                  About Us
                  </Typography>
                  
                  
                  <Image src={aboutus} />
                  <Button sx={{m: 3 , boxShadow: 10, }} variant="contained" size='large'
                  component={Link} to={'/about'}
                  >
                    Learn more
                  </Button>
                  {/* &:hover': { backgroundColor: 'primary.continue',} */}
                  
                  </Box>

                 
              </Grid>

              <Grid item xs={6}>
                <Box sx={{boxShadow: 10}} textAlign={"center"} p={5}>

                <Typography variant='h2' sx={{my:3, textAlign: "center", color: "primary.main"}}
              >
                  Appointment Request
                </Typography>
                <Image src={apptreq} />
                <Button sx={{m: 3 , boxShadow: 10,}} variant="contained" size='large'
                  component={Link} to={'/request'}
                  >
                    Learn more
                  </Button>
                </Box>

              </Grid>

              <Box sx={{ m: 3 }}></Box>


            </Grid>
            <Box sx={{ m: 3 }}></Box>

            <Divider variant="middle" />

            <Box>

            <Container>
            <Box sx={{ m: 9}}></Box>

              <Typography variant='h4' sx={{my:2, textAlign: "center", color: "primary.main"}}>
                Read what our patients are saying about us!
              </Typography>
              <Box textAlign={'center'}>
              <Rating 
                size='large'
                readOnly
                value={5}
                max={5}
                sx={{my: 2, justifyItems: "center"}}

              />
              </Box>
              <Typography variant='h4' sx={{ fontStyle: 'italic' , color: "primary.text"}}>
                "After years of coping with my horrible cystic acne, I finally visited Dr. Love. She gave me a specific treatment designed to improve my skin. After following her instructions, my skin has improved tremendously! Super grateful for Dr. Love!

"
              </Typography>
              <Box sx={{ m:4}}></Box>

              </Container>

            </Box>

            <Box textAlign={'center'} sx={{ m: 3 , alignItems: "center"}}>
                <Button variant="contained" size='large' component={Link} to={'/reviews'}>
                  View More
                </Button>
              </Box>
              <Divider variant="middle" />

      

        </Container>


      </ThemeProvider>
    )
  }


export default Home;
