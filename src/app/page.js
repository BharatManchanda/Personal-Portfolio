'use client'
import { Box, Button, Typography, Grid2 as Grid } from "@mui/material";
import CallMadeIcon from '@mui/icons-material/CallMade';
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Profile from "../app/assets/images/profile.jpg"
import { MainHeading } from "./Common/Singleton/MainHeading";
import { AppContext } from "./layout";
import { Languages, projects } from "./Constants";
import Project from "./Components/Project";

const gradientBorderColor = {
	borderImage: "linear-gradient(to right, #ff0000, #0000ff) 1",
	background: 'linear-gradient(45deg, red, blue)',
	WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
	maskComposite: 'exclude',
}

export default function Home() {
	const textArray = ['Bharat Manchanda', "Laravel Developer", "React Developer", "PHP Developer"];
	const {mode} = useContext(AppContext);
	
	const [textIndex, setTextIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentText, setCurrentText] = useState('');


	useEffect(() => {
		const delay = isDeleting ? 100 : 150;
	
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

	
	return (
		<>
			<Grid container spacing={0} py={7}>
				<Grid size={{lg:6, xs:12}}>
					<Typography variant="h4" fontWeight={'bold'} mt={2}>
						Hi I Am <br />
						<Typography variant="h4" component={'span'} fontWeight={'bold'} sx={{
							borderRight: "2px solid",
							whiteSpace: "nowrap",
						}}>
							{currentText}
						</Typography>
					</Typography>
					<Typography variant="body1" mt={2}>
						Designing & Developing full stack applications for over 1.5 years as a full stack developer.
					</Typography>

					<Box className="flex gap-4" mt={2}>
						<Button variant="contained" color="red" className="capitalize" size="large">
							Download CV
						</Button>
						<Button variant="text" color="black" className="capitalize" size="large" endIcon={<CallMadeIcon/>}
							sx={{ fontWeight: 'bold' }}>
							Projects
						</Button>
					</Box>
					
					<Box mt={2}>
						<Box>
							<Typography variant="body1" fontSize={'19px'} fontWeight={'bold'}>
								10+
							</Typography>
							<Typography variant="body1">
								Projects Work
							</Typography>
						</Box>
						<Box className="flex gap-6" mt={2}>
							<Box className="f-width">
								<Typography variant="body1" fontSize={'19px'} fontWeight={'bold'}>
									5+
								</Typography>
								<Typography variant="body1">
									Prokects Done
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
						right: {xs: '27px', md: '0px'}
					}}>
						<Box className="w-20 h-20 rounded-full absolute" sx={{
							zIndex: "3 !important",
							background: 'linear-gradient(45deg, red, blue)',
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

			<MainHeading label={'About Me'} />

			<Grid container mt={3}>
				<Grid size={{lg:6, xs:12}}>
					<Typography variant="h5" gutterBottom fontWeight={'bold'}>
						Get to know me!
					</Typography>
					<Typography variant="body1" gutterBottom mb={2}>
						I'm a <span className="font-bold">Full stack Web Developer</span> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <span className="font-bold">Projects</span> section.
					</Typography>
					<Typography variant="body1" gutterBottom mb={2}>
						I also like sharing content related to the stuff that I have learned over the years in <span className="font-bold">Web Development</span> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <span className="font-bold">Linkedin</span> and <span className="font-bold">Instagram</span> where I post useful content related to Web Development and Programming.
					</Typography>
					<Typography variant="body1" gutterBottom mb={2}>
						I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
					</Typography>
				</Grid>
				<Grid size={{lg:6, xs:12}}>
					<Typography variant="h5" gutterBottom fontWeight={'bold'}>
						My Skills
					</Typography>
					<Box className="md:w-[400px]">
						{Languages.map((coding) => (
							<Button variant="contained" color="#000" sx={{
								mr:2, mb:2,
								fontWeight: "bold",
								textTransform: 'capitalize',
								background:"#D9D9D9",
								boxShadow: "none",
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

			<MainHeading label={'Projects'} />
			<Grid container mt={4} spacing={3}>
				{projects.map((project, key) => (<>
					<Project project={project} count={key+1} />
				</>))}
			</Grid>
		</>
	);
}
