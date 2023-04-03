import Home from './components/Home';
import Request from './components/Request';
import Reviews from './components/Reviews';
import About from './components/About';
import navbar from './components/navbar';


import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Routes, Route, Outlet, Link } from "react-router-dom"; 
import { Container, Typography } from '@mui/material';
import { MuiNavbar } from './components/navbar';


export default function App() {
  return (
    <div className='App'>
    <MuiNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='request' element={<Request />} />
        <Route path='reviews' element={<Reviews />} />
        <Route path='about' element={<About />} />
      </Routes>
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



// const navStyle = {textDecoration: "none", color:"#967969"};
// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link style={navStyle} to="/">Home</Link>
//           </li>
//           <li>
//             <Link style={navStyle} to="/About">About</Link>
//           </li>
//           <li>
//             <Link style={navStyle} to="/Request">Request</Link>
//           </li>
//           <li>
//             <Link style={navStyle} to="/Reviews">Reviews</Link>
//           </li>
//         </ul>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }