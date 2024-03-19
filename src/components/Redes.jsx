import { Box, Typography, Stack } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import spotify from '../utils/images/spf.png'
import deezer from '../utils/images/dz.png'
import apple from '../utils/images/app.png'
import amazon from '../utils/images/amz.png'

const Redes = ({mode}) => {
    return (
        <Box sx={{ maxWidth: 1000, mt: 1, mx: 'auto'}}>
                    <Box style={{ }}>
                        <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', color: mode ? 'green2019d' : 'blue2022d', my: 3}}>
                            <span className="title" sx={{ lineHeight: 1.2 }}>
                                ¡Seguime en mis Redes!
                            </span>
                        </Typography>
                    </Box>
                    <Box class="redes">
                            <span title="Facebook">
                                <FacebookIcon fontSize="large" sx={{ color: mode ? 'green2019d' : 'blue2022d', transform: 'scale(2.3)', '&:hover': {color: '#9AA69C', cursor: 'pointer', transition: 'color 1s ease, background-color 0.3s ease'}}}/>
                            </span>
                            <span title="Instagram">
                                <InstagramIcon fontSize="large" sx={{ color: mode ? 'green2019d' : 'blue2022d', transform: 'scale(2.3)', '&:hover': {color: '#9AA69C', cursor: 'pointer', transition: 'color 1s ease, background-color 0.3s ease'}}}/>
                            </span>
                            <span title="YouTube">
                                <YouTubeIcon fontSize="large" sx={{ color: mode ? 'green2019d' : 'blue2022d', transform: 'scale(2.9)',ml:1.2, xs: {ml:0}, '&:hover': {color: '#9AA69C', cursor: 'pointer', transition: 'color 1s ease, background-color 0.3s ease'}}}/>
                            </span>
                    </Box>

                    <Typography variant='h6' sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', color: mode ? 'green2019d' : 'blue2022d', mt:6, mb:2 }}>
                            <span className="title" sx={{ lineHeight: 1.2 }}>
                                Y escuchame en la plataforma que más te guste
                            </span>
                    </Typography>
                    <Box class="redes">
                        <Stack class="redesGrid">
                            <Box  className="hoverFilter" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , color: mode ? 'green2019d' : 'blue2022d'}}>
                                <img src={spotify} alt="spotify" className={mode ? '' : 'filterBlue' } style={{ maxWidth: '45px'}} /> 
                                <span className="title" style={{fontSize:'13px', marginTop: '2px'}}>Spotify</span>
                            </Box>
                            <Box className="hoverFilter" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , color: mode ? 'green2019d' : 'blue2022d'}}>
                                <img src={deezer} alt="deezer" className={mode ? '' : 'filterBlue' } style={{ maxWidth: '46px'}} /> 
                                <span className="title" style={{fontSize:'13px', marginTop: '2px'}}>Deezer</span>
                            </Box>
                            <Box className="hoverFilter" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: mode ? 'green2019d' : 'blue2022d'}}>
                                <img src={apple} alt="apple" className={mode ? '' : 'filterBlue' } style={{ maxWidth: '46px'}} />
                                <span className="title" style={{fontSize:'13px', marginTop: '2px'}}>Apple Music</span>
                            </Box>
                            <Box className="hoverFilter" sx={{ display: 'flex', flexDirection: 'column' , alignItems: 'center', color: mode ? 'green2019d' : 'blue2022d'}}>
                                <img src={amazon} alt="deezer" className={mode ? '' : 'filterBlue' } style={{ maxWidth: '46px'}} /> 
                                <span className="title" style={{fontSize:'13px', marginTop: '2px'}}>Amazon Music</span>
                            </Box>
                        </Stack>
                    </Box>
        </Box>
    )
}

export default Redes