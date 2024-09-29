"use client";
import { Box, Button, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Dot from '../../Singleton/Icons/Dot'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

const MenuButton = styled(Button)({
	padding: 8,
	borderRadius: 4,
	fontWeight: 'medium',
	fontSize: '16px',
	// color: isDarkMode ? '#fff' : '#000',
	textTranform: 'capitalize !important',
	"&:hover": {
		background: 'none'
	}
});

export const Header = ({
    mode,
    setMode
}) => {
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
					<Typography variant="h4" fontWeight={'bold'}>
						Bharat
					</Typography>
					<Dot style={{marginTop: "27px", marginLeft: "5px"}} />
				</Box>
				<Box>
					{["Home", "Works", "About", "Projects", "Services"].map((menu, key) => (
						<MenuButton sx={{mr: '50px'}} size="small" key={key}>
							{menu}
						</MenuButton>
					))}
				</Box>
				<Box className="flex gap-2">
					<Button variant="outlined" color="black" className="capitalize">
						Let's Chat
					</Button>
					<Tooltip title={mode == "dark" ? "Light Mode" : "Dark Mode"}>
						<IconButton variant="outlined" color="red" className="capitalize" onClick={togggleDarkMode}>
							{mode == "dark" ? <LightModeIcon /> : <DarkModeIcon />}
						</IconButton>
					</Tooltip>
				</Box>
			</Box>
        </>
    )
}
