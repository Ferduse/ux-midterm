import Home from './components/Home';
import Request from './components/Request';
import Reviews from './components/Reviews';
import About from './components/About';
import MuiNavbar from './components/navbar';
import Footer from './components/footer';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Routes, Route, Outlet, Link } from "react-router-dom"; 
import { Container, Typography } from '@mui/material';
// import { MuiNavbar } from './components/navbar';


export default function App() {
  return (
    <div className='App'>
    <MuiNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='Request' element={<Request />} />
        <Route path='Reviews' element={<Reviews />} />
        <Route path='About' element={<About />} />
      </Routes>
      <Footer />

    </div>
  );
}

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#187bcd",
//     },
//     secondary: "#FFFFFF",
//   },
//   typography: {
//     fontFamily: "Roboto",
//     h1: {
//       fontSize: "3rem",
//       fontWeight: 600,
//     },

//   }

// });

// function Home() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Container>
//         <Typography 
//           variant='h1'
//         >
//           Dermatology
//         </Typography>
//       </Container>
//     </ThemeProvider>
//   )
// }



