import { Grid, Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Redes = () => {
    return (
        <Box sx={{ maxWidth: 1000, mt: 2, mx: 'auto'}}>
                    <Box style={{ }}>
                        <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', my: 4}}>
                            <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                                ¡Seguime en mis Redes!
                            </span>
                        </Typography>
                    </Box>
                    <Box class="layout">
                        <div class="">                        
                            <span className="iconoRedes">
                                <FacebookIcon className="hoverRedes" fontSize="large" style={{transform: 'scale(2.3)'}}/>
                            </span>
                        </div>
                        <div class="">
                            <span className="iconoRedes">
                                <InstagramIcon fontSize="large" style={{transform: 'scale(2.3)'}}/>
                            </span>
                        </div>
                        <div class="">
                            <span className="iconoRedes">
                                <YouTubeIcon fontSize="large" style={{transform: 'scale(3)'}}/>
                            </span>
                        </div>
                    </Box>
        </Box>
    )
}

export default Redes