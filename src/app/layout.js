"use client";
import localFont from "next/font/local";
import "./globals.css";
import { Box, IconButton, ThemeProvider, Typography } from "@mui/material";
import { lightTheme } from "./Theme";
import { darkTheme } from "./Theme";
import { Header } from "./Common/Dependent/Header";
import { createContext, useEffect, useState } from "react";
import Footer from "./Common/Dependent/Footer";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

// export const metadata = {
// 	title: "Bharat Manchanda",
// 	description: "Generated by create next app",
// };
export const AppContext = createContext();

// const styles = {
// 	scrollButton: {
// 	  position: 'fixed',
// 	  bottom: '50px',
// 	  right: '30px',
// 	  backgroundColor: '#0070f3',
// 	  color: '#fff',
// 	  border: 'none',
// 	  borderRadius: '50%',
// 	  padding: '10px',
// 	  fontSize: '24px',
// 	  cursor: 'pointer',
// 	  zIndex: '1000',
// 	},
// };

export default function RootLayout({ children }) {
	const [mode, setMode] = useState("light");
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
		  setIsVisible(true);
		} else {
		  setIsVisible(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
		  top: 0,
		  behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
		  window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<html lang="en">
			<body className={`bg-${mode == 'dark' ? 'gray-900' : 'white'} text-${mode == 'dark' ? 'white' : 'black'}`}>
				<>
					<AppContext.Provider value={{mode}}>
						<ThemeProvider theme={mode == 'dark' ? darkTheme : lightTheme}>
							<Box mx={{lg:15, xs:2}} my={1}>
								<Header mode={mode} setMode={setMode} />
								{children}
							</Box>
							<Box px={{lg:15, xs:2}} py={1} bgcolor={"#121212"}>
								<Footer />
							</Box>
							<Box px={{lg:15, xs:2}} py={2} bgcolor={"#000"} className="flex justify-center">
								<Typography variant="body1" color="white">
									Copyright @2023 All Right Reserved
								</Typography>
							</Box>
							{isVisible && (
								<IconButton color="primary" onClick={scrollToTop} sx={{
									position: 'fixed',
									bottom: '5%',
									right: '3%',
									zIndex: '1000',
									background: "#ebebff",
									":hover":{
										background: "#0000ffff",

									}
								}}>
									<KeyboardArrowUpIcon />
								</IconButton>
							)}
						</ThemeProvider>
					</AppContext.Provider>
				</>
			</body>
		</html>
	);
}
