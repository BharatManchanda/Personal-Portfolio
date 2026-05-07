import React from 'react'
import {Box, Grid2 as  Grid, Typography} from '@mui/material'
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Facebook from '../../Singleton/Icons/Facebook';
import Linkedin from '../../Singleton/Icons/Linkedin';
import Instagram from '../../Singleton/Icons/Instagram';
import Link from 'next/link';

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
                        <Link
                            href="https://www.facebook.com/bha1600/"
                            target="_blank"
                            rel="noopener"
                        >
                            <Facebook style={{ width: "35px" }} />
                        </Link>

                        <Link
                            href="https://www.instagram.com/_bharatm/"
                            target="_blank"
                            rel="noopener"
                        >
                            <Instagram style={{ width: "35px" }} />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/bharat-manchanda/"
                            target="_blank"
                            rel="noopener"
                        >
                            <Linkedin style={{ width: "35px" }} />
                        </Link>
                    </Box>
                </Grid>
                <Grid size={{ md: 5, xs: 12 }}>
                    <Box className="flex md:justify-end justify-center gap-2" mb={1}>
                        <HomeOutlinedIcon sx={{ color: "#fff" }} />
                        <Typography
                            variant="body1"
                            color="#fff"
                            component="a"
                            href="https://maps.google.com/?q=Urlana+Kalan+Panipat+132103"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: "none" }}
                        >
                            Urlana Kalan, Panipat - 132103, India
                        </Typography>
                    </Box>

                    <Box className="flex md:justify-end justify-center gap-2" mb={1}>
                        <MailOutlinedIcon sx={{ color: "#fff" }} />
                        <Typography
                            variant="body1"
                            color="#fff"
                            component="a"
                            href="mailto:bharatmanchanda13@gmail.com"
                            sx={{ textDecoration: "none" }}
                        >
                            bharatmanchanda13@gmail.com
                        </Typography>
                    </Box>

                    <Box className="flex md:justify-end justify-center gap-2" mb={1}>
                        <CallOutlinedIcon sx={{ color: "#fff" }} />
                        <Typography
                            variant="body1"
                            color="#fff"
                            component="a"
                            href="tel:+917777004907"
                            sx={{ textDecoration: "none" }}
                        >
                            +91 7777004907
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer
