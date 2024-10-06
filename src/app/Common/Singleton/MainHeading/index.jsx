import React from "react";
import { Box, Typography } from "@mui/material";

export const MainHeading = ({label}) => {
    return (<>
        <Box className="flex flex-col justify-center items-center">
            <Typography fontSize={"40px"} fontWeight={'bold'} mb={1}>
                {label}
            </Typography>
            <Typography className="rounded" sx={{
                position: "relative",
                width: "50px",
                "&:before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "10px",
                    background: "linear-gradient(to right, red, blue)",
                    borderRadius: "5px",
                },
            }}></Typography>
        </Box>
    </>);
}