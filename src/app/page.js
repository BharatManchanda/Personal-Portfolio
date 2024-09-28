'use client'
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";

const MyComponent = styled(Button)({
	padding: 8,
	borderRadius: 4,
	color: '#000',
	"&:hover": {
		background: 'none'
	}
});

export default function Home() {
	return (
		<>
			<Box className="flex justify-between" mx={15}>
				<Typography variant="h4" color="initial" fontWeight={'bold'}>
					Bharat<Typography component={'span'}>.</Typography>
				</Typography>
				<Box>
					{["Home", "Works", "About", "Projects", "Services"].map((menu, key) => (
						<MyComponent className="capitalize">
							{menu}
						</MyComponent>
					))}
				</Box>
				<Button variant="outlined" color="primary" className="capitalize">
					Let's Chat
				</Button>
			</Box>
		</>
	);
}
