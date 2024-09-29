'use client'
import { Box, Button, Typography, IconButton, Tooltip, Grid2 as Grid } from "@mui/material";
import styled from "@emotion/styled";
import CallMadeIcon from '@mui/icons-material/CallMade';

export default function Home() {
	return (
		<>
			<Grid container spacing={0}  py={7}>
				<Grid size={6}>
					<Typography variant="h4" fontWeight={'bold'} mt={2}>
						Hi I Am <br />
						Bharat Manchanda
					</Typography>
					<Typography variant="body1" mt={2}>
						Designing & Developing full stack applications for over 1.5 years as a full stack developer.
					</Typography>

					<Box className="flex gap-4" mt={2}>
						<Button variant="contained" color="red" className="capitalize" size="large">
							Hire Me
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
				<Grid size={6}>
					Lorem ipsum
				</Grid>
			</Grid>
		</>
	);
}
