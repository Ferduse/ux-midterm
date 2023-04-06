import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Paper, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material';
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



// import MuiImageSlider from 'mui-image-slider';



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
          <Typography 
          variant='h4'
          sx={{my:5, textAlign: "center", color: "primary.text"}}
          >
            We are located at the heart of SoHo, NYC
            <br></br>
              Call us at <Typography variant='h2' sx={{color:"primary.main"}} >(718) 555-6458 

              </Typography>

          </Typography>
            <Image src={smile3} />
          <Box
            sx={{
                p: 5,
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                justifyContent: "space-between",
                gap: 4,
                bgcolor: "secondary.main",
            }}
            >
              

              <Typography sx={{my:1, textAlign: "center", color: "#FFFFFF", fontSize: 20, fontWeight:'medium'}}>
                Trust your skin to us
              </Typography>

            </Box>
              
            <Box 
              sx={{
                //height: 500,
                //display: "flex",
                //justifyContent: "center",
                alignItems: "left",
                //flexDirection: "column",
                //backgroundPosition: "center",
                //backgroundRepeat: "no-repeat",
                //backgroundSize: "cover",
              }}
               
            >
            
            <Image src={smile5} />
            </Box>
            <Image src={smile5} />
            

        </Container>
        {/* <div className="home" style={{ backgroundImage: `url(${smile3})`}}>

</div>
        <div className="home" style={{ backgroundImage: `url(${smile4})`}}>

</div> */}

        {/* <Container style={{ backgroundImage: `url(${smile})`}}>

        </Container> */}

      </ThemeProvider>
    )
  }


export default Home;
