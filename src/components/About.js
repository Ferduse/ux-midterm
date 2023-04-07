import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue, pink } from '@mui/material/colors';
import { Box, Button, Container, Paper, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { makeStyles } from '@mui/material';
import Divider from '@mui/material/Divider';
import waitingroom from './img/derm-waitingroom.jpeg';
import Grid from '@mui/material/Grid';
import doctor1 from './img/doctor1.jpeg';
import doctor4 from './img/doctor4.jpeg';
import doctor3 from './img/doctor3.jpeg';
import office from './img/office.png';
import office2 from './img/office2.jpeg';
import office3 from './img/office3.jpeg';
import office4 from './img/office4.jpeg';

import Image from 'mui-image'


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

function About(){
  return( 
    <ThemeProvider theme={theme}>
        <Container>
            <Typography variant='h4'
            sx={{my:7, textAlign: "center", color: "primary.main"}}
            >
                About Us
            </Typography>

            <Typography variant='h3' sx={{my:7, textAlign: "center", color: "primary.text"}}>
              Our practice is to state-of-the-art, patient-centered care that is appropriate and convenient. Our priorities are ensuring patient safety and providing effective treatments.
              We provide services in general dermatology, pediatric dermatology, skin laser surgery, and cosmetic dermatology.
              All of our physicians are board certified by the American Board of Dermatology.
              We accept most insurances. We open early and have evening and weekend hours in clean and modern facilities.

            </Typography>

            <Typography variant='h4' sx={{color: "primary.main"}}>
              Languages Spoken
            
            </Typography>

            <Typography variant='h5'sx={{my:2,color: "primary.text"}}>
            English, Spanish, Korean, Bangla, Urdu

            </Typography>
            <Box sx={{ m: 3 }}></Box>

            <Divider variant="middle" />
            <Box sx={{ m: 3 }}></Box>
            <Typography variant='h4' sx={{color: "primary.main"}}>
              Our Office
              </Typography>

              <Typography variant='h5'sx={{my:2,color: "primary.text"}}>
              We always keep offices spotless and polished. We know that COVID19 has been affecting all of us so our team went above and beyond to 
              ensure the safety of our patients and staff by deep cleaning our facilities everyday 
              </Typography>

            <Grid container my={4} spacing={4}>
              <Grid item xs={6}>
                <Image src={office} />
              </Grid>

              <Grid item xs={6}>
              <Image src={office2} />
              </Grid>

              <Grid item xs={6}>
              <Image src={office3} />
              </Grid>

              <Grid item xs={6}>
              <Image src={office4} />
              </Grid>
            </Grid>

            <Box sx={{ m: 7 }}></Box>
            <Divider variant="middle" />
            <Box sx={{ m:7 }}></Box>

            <Typography variant='h4' sx={{color: "primary.main"}}>
              Our Providers
              </Typography>

              <Typography variant='h5'sx={{my:2,color: "primary.text"}}>
              We strive to be accessible to our patients. Our providers and staff speak multiple languages and are 
              sensitive to our patients cultural backgrounds.
              </Typography>
              <Box sx={{ m:7 }}></Box>

            <Typography variant='h2'
            sx={{my:2, textAlign: "center", color: "primary.main"}}>
            
               Dr. Lebeth Mclean
              </Typography>
              <Typography variant='h3'sx={{my:3, textAlign: "center", color: "primary.text"}}>
            
                Dermatologist
              </Typography>
            <Grid container spacing={1}
            direction="row"
            justifyContent="space-evenly"
            Ma
            >
            <Box sx={{display: "flex", width: 500, height: 500, alignItems:"left"}} >
              <Image maxHeight='30' src={doctor1} />
            </Box>
            <Typography variant='h3'
            sx={{my:3, textAlign: "left", color: "primary.text"}}>
            
                Dr. Lebeth McLean grew up in Greece. She graduated from
                Yale University in 1990 and Stony Brook in 2002. She took residency in dermatology at New York University.
              </Typography>

              <Typography variant='h3'
            sx={{my:1, textAlign: "left", color: "primary.text"}}>
            
                Dr. McLean takes pride in seeing patients of all ages for both medical and cosmetic treatments. 
                She focuses on a patient- centered approach, aiming to address each patients concerns.
              </Typography>

            </Grid>
            <Box sx={{ m: 3 }}></Box>
            <Divider variant="middle" />

            <Typography variant='h2'
            sx={{my:2, textAlign: "center", color: "primary.main"}}>
            
                 Dr. Shenara Sexton
              </Typography>
              <Typography variant='h3'
            sx={{my:3, textAlign: "center", color: "primary.text"}}>
            
                Dermatologist
              </Typography>
            <Grid container spacing={1}
            direction="row"
            justifyContent="space-evenly"
            
            >
            
            <Box sx={{display: "flex", width: 500, height: 500, alignItems:"left"}} >
            <Image src={doctor4} />
            </Box>
            <Typography variant='h3'
            sx={{my:3, textAlign: "left", color: "primary.text"}}>
            
                Dr. Shenara Sexton completed her undergraduate studies at the University of Georgia.
                At the Emory University School of Medicine, where she received her doctor of medicine degree and she's been 
                practicing for 14 years.
              
              </Typography>

              <Typography variant='h3'
            sx={{my:1, textAlign: "left", color: "primary.text"}}>
              Sexton’s focus has always been to provide patients with the most up-to-date and evidence-based treatments for dermatologic conditions.
            She has a specialized interest in the treatment of acne, hair, and scalp conditions, as well as skin cancer care.
              </Typography>

            </Grid>


            <Box sx={{ m: 3 }}></Box>
            <Divider variant="middle" />
            

            <Typography variant='h2'
            sx={{my:2, textAlign: "center", color: "primary.main"}}>
            
                 Dr. Elyse M. Love
              </Typography>
              <Typography variant='h3'
            sx={{my:3, textAlign: "center", color: "primary.text"}}>
            
                Dermatologist
              </Typography>
            <Grid container spacing={1}
            direction="row"
            justifyContent="space-evenly"
            >
            <Box sx={{display: "flex", width: 500, height: 500, alignItems:"left"}}>
            <Image src={doctor3} />
            </Box>
            <Typography variant='h3'
            sx={{my:3, textAlign: "left", color: "primary.text"}}>
Originally from Alabama, Dr. Love completed her undergraduate education at the University of Alabama.
She received her Doctor of Medicine from Emory University School of Medicine.
              </Typography>

              <Typography variant='h3'
            sx={{my:1, textAlign: "left", color: "primary.text"}}>
Dr. Love has a clinical and research interest in the quality of life impact of dermatologic conditions and methods to modernize the dermatology visit.              </Typography>

            </Grid>
            <Box sx={{ m: 3 }}></Box>
            <Divider variant="middle" />
            
            <Divider variant="middle" />
            <Box sx={{ m: 3 }}></Box>

        </Container>

    </ThemeProvider>
  )
}

export default About;