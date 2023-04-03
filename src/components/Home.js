import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import waitingroom from './img/derm-waitingroom.jpeg';
import Image from 'mui-image'

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

function Home() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Typography 
            variant='h1'
            sx={{my:4, textAlign: "center", color: "primary.main"}}
          >
            Dermatology
          </Typography>
          <Typography 
          variant='2'
          sx={{my:4, textAlign: "center", color: "secondary"}}
          >
            Address: SoHo 
            Phone Number: 7185556458

          </Typography>
            <Image src={waitingroom} width={1000} />
          {/* <Box
            sx={{
                p: 4,
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                justifyContent: "space-between",
                gap: 4,
                bgcolor: "primary.dark",
            }}
                >

            </Box> */}
        </Container>
      </ThemeProvider>
    )
  }


export default Home;
