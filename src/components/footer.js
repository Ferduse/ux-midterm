import React from "react";
import {Box, Typography} from '@mui/material'
import { Routes, Route, Outlet, Link } from "react-router-dom"; 
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box sx={{textAlign:'center', bgcolor: '#FFFFFF', color: 'primary.main', p: 3}}>
            <Box 
                sx={{
                    my: 3,
                    "& svg": {
                        fontSize: "60px",
                        cursor: "pointer",
                        mr: 2,
                    },
                    "& svg:hover":{
                        color: "#6D6875",
                        transform:'translate(5px)',
                        transition:'all 400ms'
                    }
                }}
            >
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <LinkedInIcon />
            </Box>
            <Typography variant="h5">
                2023 Copyright &copy;

            </Typography>

        </Box>
    );
};

export default Footer;