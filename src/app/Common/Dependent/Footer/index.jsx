import React from 'react'
import {Box, Grid2 as  Grid, Typography} from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Facebook from '../../Singleton/Icons/Facebook';
import Linkedin from '../../Singleton/Icons/Linkedin';
import Instagram from '../../Singleton/Icons/Instagram';

const Footer = () => {
    return (
        <>
            <Grid container className="py-8">
                <Grid size={{md:7, xs:12}}>
                    <Typography variant="h4" color="white" gutterBottom>
                        Bharat Developer
                    </Typography>
                    <Typography variant="body1" color="#fff" gutterBottom>
                        Full-stack web developer with strong experience in building scalable web applications using modern frontend and backend technologies. Skilled in designing RESTful APIs, managing databases, and creating responsive, user-friendly interfaces.
                    </Typography>
                    <Box className="flex gap-4 justify-center md:justify-start">
                        <Facebook style={{width: "35px"}} />
                        <Instagram style={{width: "35px"}} />
                        <Linkedin style={{width: "35px"}} />
                    </Box>
                </Grid>
                <Grid size={{md:5, xs:12}}>
                    <Box className="flex md:justify-end justify-center gap-2" mb={1}>
                        <HomeOutlinedIcon color='white' />
                        <Typography variant="body1" color="#fff">
                            Urlana Kalan, Panipat - 132103, India
                        </Typography>
                    </Box>
                    <Box className="flex md:justify-end justify-center gap-2" mb={1}>
                        <MailOutlinedIcon color='white'/>
                        <Typography variant="body1" color="#fff">
                            bharatmanchanda13@gmail.com
                        </Typography>
                    </Box>
                    <Box className="flex md:justify-end justify-center gap-2"  mb={1}>
                        <CallOutlinedIcon color='white'/>
                        <Typography variant="body1" color="#fff">
                            +91 777700-4907
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
