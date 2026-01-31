'use client'
import { Box, Button, Typography, Grid2 as Grid, TextField, Paper } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Profile from "../app/assets/images/profile.jpg"
import { MainHeading } from "./Common/Singleton/MainHeading";
import { contact, initContactUs, Languages, projects } from "./Constants";
import Project from "./Components/Project";
import { useTheme } from '@mui/material/styles';
import { api } from "./Constants/api";
import { toast } from "react-toastify";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export default function Home() {
	const theme = useTheme();
	const [contactUs, setContactUs] = useState({...initContactUs});
	const [loading, setLoading] = useState(false);
	const [readMore, setReadMore] = useState(false);
	const textArray = ['Bharat Manchanda', "Laravel Developer", "React Developer", "PHP Developer", "Mern Stack Developer"];
	
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentText, setCurrentText] = useState('');
	
	
	const gradientBorderColor = useMemo(function () {
		return {
			borderImage: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main}) 1`,
			background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
			WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
			maskComposite: 'exclude',
		}
	}, []);

	const handleContactUsSubmit = (e) => {
		e.preventDefault();
		setLoading(true)
		api.contact_us(contactUs).then((response) => {
			toast.success("Form Submited succeessfully!");
			setContactUs({...initContactUs})
			setLoading(false)
		}).catch((error) => {
			toast.error(error);
			setLoading(false)
		})
	}

	useEffect(() => {
		const delay = isDeleting ? 5 : 10;
	
		const typeEffect = () => {
		const fullText = textArray[textIndex];
	
		if (!isDeleting && charIndex < fullText.length) {
			setCurrentText(fullText.substring(0, charIndex + 1));
			setCharIndex(charIndex + 1);
		} else if (isDeleting && charIndex > 0) {
			setCurrentText(fullText.substring(0, charIndex - 1));
			setCharIndex(charIndex - 1);
		} else if (!isDeleting && charIndex === fullText.length) {
			setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
		} else if (isDeleting && charIndex === 0) {
			setIsDeleting(false);
			setTextIndex((textIndex + 1) % textArray.length);
		}
		};
	
		const timer = setTimeout(typeEffect, delay);
		return () => clearTimeout(timer); // Cleanup timeout on unmount
	}, [charIndex, isDeleting, textArray, textIndex]);

	const handleContactUsChange  = (key, value)  => {
		setContactUs({
			...contactUs,
			[key]: value,
		});
	}

	
	return (
		<>
			<Grid container spacing={0} py={7}>
				<Grid size={{lg:6, xs:12}}>
					<Typography variant="h4" fontWeight={'bold'} mt={2}>
						Hi I Am <br />
						<Typography variant="h4" color="primary" component={'span'} fontWeight={'bold'} sx={{
							borderRight: "2px solid",
							whiteSpace: "nowrap",
						}}>
							{currentText}
						</Typography>
					</Typography>
					<Typography variant="body1" mt={2}>
						Designing & Developing full stack applications for over 2.5 years as a full stack developer.
					</Typography>

					<Box className="flex gap-4" mt={2}>
						<Button
							variant="contained"
							color="primary"
							className="capitalize animate__fadeInDown"
							size="large"
							component="a"
							href="./resume/bharat-resume.pdf"
							download
							sx={{
								// background: "linear-gradient(100deg, #ff0000, #0000ff)",
							}}
						>
							Download CV
						</Button>
						<Button variant="text" color="black" className="capitalize" size="large" endIcon={<CallMadeIcon/>}
							href="#projects"
							sx={{ fontWeight: 'bold' }}>
							Projects
						</Button>
					</Box>
					
					<Box mt={2}>
						<Box>
							<Typography variant="body1" fontSize={'19px'} fontWeight={'bold'}>
								20+
							</Typography>
							<Typography variant="body1">
								Projects Work
							</Typography>
						</Box>
						<Box className="flex gap-6" mt={2}>
							<Box className="f-width">
								<Typography variant="body1" fontSize={'19px'} fontWeight={'bold'}>
									10+
								</Typography>
								<Typography variant="body1">
									Projects Done
								</Typography>
							</Box>
							<Box className="f-width">
								<Typography variant="body1" fontSize={'19px'} fontWeight={'bold'}>
									Contact Us
								</Typography>
								<Typography variant="body1">
									bharatmanchanda13@gmail.com
								</Typography>
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid size={{lg:6, xs:12}}>
					<Box className="relative mt-6" sx={{
						height: {xs: '300px'},
						right: {xs: '35px', md: '0px'}
					}}>
						<Box className="w-20 h-20 rounded-full absolute" sx={{
							zIndex: "3 !important",
							background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
							right: '0%',
							top: '110px',
						}}></Box>
						<Image
							src={Profile}
							className="w-40 h-40 rounded-full absolute object-center object-cover"
							width={500}
							height={500}
							alt=""
							style={{right: "5%", zIndex:4 }}
						/>
						<Box className="w-60 h-60 border-2 rounded-full absolute" sx={{
							right: '10%',
							top: '60px',
							...gradientBorderColor,
							zIndex: 2,
						}}>
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Box id="about">
				<MainHeading label={'About Me'} />

				<Grid container mt={3} spacing={3}>
					<Grid size={{lg:6, xs:12}}>
						<Typography variant="h5" gutterBottom fontWeight={'bold'}>
							Get to know me!
						</Typography>
						<Typography variant="body1" gutterBottom mb={2}>
							I'm a <span className="font-bold">Full stack Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="font-bold">Projects</span> section.
						</Typography>
						{readMore && <>
						<Typography variant="body1" gutterBottom mb={2}>
							I also like sharing content related to the stuff that I have learned over the years in <span className="font-bold">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="font-bold">Linkedin</span> and <span className="font-bold">Instagram</span> where I post useful content related to Web Development and Programming.
						</Typography>
						<Typography variant="body1" gutterBottom mb={2}>
							I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
						</Typography></>}
						<Button variant="contained" onClick={() => setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}</Button>
					</Grid>
					<Grid size={{lg:6, xs:12}}>
						<Typography variant="h5" gutterBottom fontWeight={'bold'}>
							My Skills
						</Typography>
						<Box className="">
							{Languages.map((coding, key) => (
								<Button key={key} variant="contained" color="#000" sx={{
									mr:2, mb:2,
									fontWeight: "bold",
									textTransform: 'capitalize',
									background:"#D9D9D9",
									boxShadow: "none",
									color: "black",
									":hover": {
										boxShadow: "none"
									}
								}}>
									{coding}
								</Button>
							))}
						</Box>
					</Grid>
				</Grid>
			</Box>

			<Box id="projects">
				<MainHeading label={'Projects'} />
				<Grid container mt={4} spacing={3}>
					{projects.map((project, key) => (<React.Fragment key={key}>
						<Project project={project} count={key+1} gradientBorderColor={gradientBorderColor}/>
					</React.Fragment>))}
				</Grid>
			</Box>

			<Box id="contact-me">
				<MainHeading label={'Contact Me'} />
				<Grid container my={4} spacing={3}>
					<Grid size={{lg:6, xs:12}}>
						<Typography variant="h6" fontSize={'28px'} fontWeight={'bold'} gutterBottom>
							Drop me a Message
						</Typography>
						<Typography variant="body1" mb={3}>
							Feel free to reach out to me for any inquiries, collaborations, or just to say hi! I'll do my best to get back to you as soon as possible.
						</Typography>
						{contact.map((item, key) => (
							<Box className="flex items-center gap-2 mb-2" key={key}>
								{item.icon}
								<Typography variant="body1" {...item.props}>
									{item.label}
								</Typography>
							</Box>
						))}
					</Grid>
					
					<Grid size={{lg:6, xs:12}}>
						<Paper elevation={2} component="form" onSubmit={handleContactUsSubmit} method="POST" sx={{
							p:2,
							".MuiFormControl-root": {
								mb:3,
							}
						}} className="rounded-lg">
							<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
							<TextField
								fullWidth
								label="Name"
								value={contactUs.name}
								onChange={(e) => handleContactUsChange("name", e.target.value)}
							/>
							<TextField
								fullWidth
								label="Emai"
								value={contactUs.email}
								onChange={(e) => handleContactUsChange("email", e.target.value)}
							/>
							<TextField
								fullWidth
								multiline rows={2}
								label="Type Your Message"
								value={contactUs.messsage}
								onChange={(e) => handleContactUsChange("messsage", e.target.value)}
							/>
							<LoadingButton
								type="submit"
								loading={loading}
								loadingPosition="start"
								startIcon={loading ? <SendIcon /> : null}
								variant="contained"
								color="primary"
								sx={{
									textTransform: "capitalize"
								}}
							>
								Send
							</LoadingButton>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
