"use client";
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Dot from '../../Singleton/Icons/Dot'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const MenuButton = styled(Button)(({ mode, active }) => {
	
	return {
		padding: 8,
		borderRadius: 4,
		fontWeight: 'medium',
		fontSize: '16px',
		color: '#000',
		textTransform: 'capitalize !important',
		fontWeight: 'medium',
		color: mode === 'dark' ? '#fff' : '#000',
		mr: 5,
		background: active ? (mode === 'dark' ? "#6f6f6f" : "#f5f5f0") : "",
		height: '34px',
		"&:hover": {
			background: 'none'
		}
	}
});

export const Header = ({
    mode,
    setMode
}) => {
	const pathname = usePathname();
	console.log(pathname,"pathname");
	
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			setMode(savedTheme);
		} else {
			setMode(savedTheme);
		}
	}, [])

	useEffect(() => {
		if (mode == "dark") {
			document.documentElement.classList.add("dark")
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove("dark")
			localStorage.setItem('theme', 'light');
		}
	})

    const togggleDarkMode = () => {
		setMode(mode => mode == "light" ? "dark" : "light");
	}

    return (
        <>
            <Box className="flex justify-between items-center">
				<Box className="flex">
					<Typography component={Link} href="/" variant="h4" fontWeight={'bold'}>
						Bharat
					</Typography>
					<Dot style={{marginTop: "27px", marginLeft: "5px"}} />
				</Box>
				<Box display={{xs:"none", md:'block'}}>
					{["Home", "Blog", "About", "Projects", "Contact Me"].map((menu, key) => (<MenuButton
						key={key}
						component={Link}	
						href={menu == "Home" ? "/" : menu.toLowerCase().replaceAll(" ","-")}
						mode={mode}
						sx={{mr:2.5}}
						size="small"
						active={(menu === "Home" && pathname === "/") || menu.toLowerCase().replaceAll(" ", "-") === pathname.replaceAll("/", "")} 
					>
						{menu}
					</MenuButton>))}
				</Box>
				<Box className="flex gap-2">
					<Button variant="outlined" color="black" className="capitalize">
						Let's Chat
					</Button>
					<Tooltip title={mode == "dark" ? "Light Mode" : "Dark Mode"}>
						<IconButton variant="outlined" color="primary" className="capitalize" onClick={togggleDarkMode} sx={{
							// color: "linear-gradient(100deg, #ff0000, #0000ff)",
						}}>
							{mode == "dark" ? <LightModeIcon sx={{color: "linear-gradient(100deg, #ff0000, #0000ff)"}} /> : <DarkModeIcon />}
						</IconButton>
					</Tooltip>
				</Box>
			</Box>
        </>
    )
}
