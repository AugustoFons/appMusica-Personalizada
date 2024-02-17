import { Grid, Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Redes = () => {
    return (
        <Box sx={{ maxWidth: 1000, mt: 2, mx: 'auto'}}>
                    <Box style={{ }}>
                        <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', color: 'green2019d', my: 4}}>
                            <span className="title" sx={{ lineHeight: 1.2 }}>
                                ¡Seguime en mis Redes!
                            </span>
                        </Typography>
                    </Box>
                    <Box class="redes">
                        <div class="">                        
                            <span>
                                <FacebookIcon fontSize="large" sx={{ color: 'green2019d', transform: 'scale(2.3)', '&:hover': {color: '#CBCF88', cursor: 'pointer'}}}/>
                            </span>
                        </div>
                        <div class="">
                            <span>
                                <InstagramIcon fontSize="large" sx={{ color: 'green2019d', transform: 'scale(2.3)', '&:hover': {color: '#CBCF88', cursor: 'pointer'}}}/>
                            </span>
                        </div>
                        <div class="">
                            <span>
                                <YouTubeIcon fontSize="large" sx={{ color: 'green2019d', transform: 'scale(3)', '&:hover': {color: '#CBCF88', cursor: 'pointer'}}}/>
                            </span>
                        </div>
                    </Box>
        </Box>
    )
}

export default Redes