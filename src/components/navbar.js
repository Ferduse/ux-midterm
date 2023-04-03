import { AppBar, IconButton, Stack, Toolbar, Typography, Button } from "@mui/material"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import { Routes, Route, Outlet, Link } from "react-router-dom"; 

export const MuiNavbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <LocalHospitalIcon />
                </IconButton>
                <Typography variant="h3" component='div' sx={ {flexGrow: 1}}>
                    Dermatology
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Appointment Requests</Button>
                    <Button color='inherit'>Reviews</Button>

                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar;