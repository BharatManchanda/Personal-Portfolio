'use client'
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export const MainHeading = ({label}) => {
	const theme = useTheme();
    return (<>
        <Box className="flex flex-col justify-center items-center">
            <Typography fontSize={"40px"} fontWeight={'bold'} mb={1}>
                {label}
            </Typography>
            <Typography className="rounded relative" sx={{
                width: "50px",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "10px",
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: "5px",
                },
            }}></Typography>
        </Box>
    </>);
}