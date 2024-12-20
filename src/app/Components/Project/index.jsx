import React from 'react'
import Image from 'next/image';
import { Box, Button, Divider, Grid2 as Grid, Typography } from '@mui/material';
import BreakpointDetector from '@/app/Common/Singleton/Breakpoint';
// import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Project = ({project, count, gradientBorderColor}) => {
    const {title, description, image} = project;
    return (
        <>
            {(count%2 != 0 || BreakpointDetector() == 'sm') && <Grid size={{lg:6, xs:12}} mb={{lg:3}}>
				<Box className="relative lg:px-[24px] md:h-[250px] h-[200px] w-full">
                    <Box className="hidden md:block md:w-[400px] w-full md:h-[250px] h-[200px] border-4 rounded-md absolute left-0 top-6" sx={{
                        ...gradientBorderColor
                    }} />
                    <Image
                        src={image}
                        className="absolute rounded-lg object-center object-cover md:w-[400px] w-full md:h-[250px] h-[200px]"
                        width={500}
                        height={300}
                        alt=""
                    />
                </Box>
            </Grid>}
            <Grid mb={3} size={{lg:6, xs:12}}>
                <Typography variant="h5" fontWeight={'bold'} gutterBottom>
                    Project {count}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Button
                    color="black"
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        ml: '-8px',
                    }}
                    endIcon={<KeyboardDoubleArrowRightIcon />}
                >
                    Read More</Button>
            </Grid>
            {(count % 2 == 0 && BreakpointDetector() != 'sm') && <Grid size={{lg:6, xs:12}} mb={3}>
				<Box className="flex justify-end relative lg:pl-[24px] h-[250px] w-full">
                    <Box className="hidden md:block md:w-[400px] w-full md:h-[250px] h-[200px] border-4 rounded-md absolute right-6 top-6" sx={{
                        ...gradientBorderColor
                    }} />
                    <Image
                        src={image}
                        className="absolute rounded-lg object-center object-cover md:w-[400px] md:h-[250px] h-[200px]"
                        width={500}
                        height={300}
                        alt=""
                    />
                </Box>
            </Grid>}
        </>
    )
}

export default Project
