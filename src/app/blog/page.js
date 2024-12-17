import { Box, Typography } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export default function Blog () {
    return (
        <>
            <Box className="flex flex-col justify-center items-center" my={6}>
                    
                    <AutoAwesomeIcon className='animate__zoomIn' color="primary" sx={{
                        fontSize: '80px',
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                    }} />
                <Typography variant="h6" gutterBottom>
                    Something great is on the way
                </Typography>
                <Typography variant="h3" className="animate__zoomIn" color="primary" fontWeight={'bold'} gutterBottom>
                    Comming Soon
                </Typography>
                <Typography gutterBottom>
                    Our website is under construction. We'll be here soon with our new awesome site.
                </Typography>
            </Box>
        </>
    )
}