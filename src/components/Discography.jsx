import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, Loader } from './';
import SwiperCard from "./SwiperCard";
import { SwiperSlide } from 'swiper/react';
import { useTheme } from '@mui/material';


const Discography = ({ Cd1, Cd2, setIdCd, mode, setMode, toggleSwitch }) => {
    const theme = useTheme();

    return (
        <Box>
            <Typography variant='h5' fontWeight='semibold' mb={2} mt={3} sx={{display:'flex', justifyContent: 'center'}}>
                <span className="title" style={{ color: mode ? '#8C8F7C' : '#768f9c', marginRight:'8px', display:'flex', alignItems:'center', whiteSpace:'pre-wrap'}}>
                    {'2022 |'}
                </span>
                <span className="title" style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d}}>
                    Por Qué No?
                </span>
            </Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
                <SwiperCard>
                    {Cd2?.map((item2, idx) => (
                        <Box key={idx}>
                            {item2.id && <SwiperSlide> <VideoCard año={2022} video={item2} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch}/></SwiperSlide>}
                        </Box>
                    ))}
                </SwiperCard>

            </Stack>

            <Typography variant='h5' fontWeight='semibold' mb={2} mt={3} sx={{display:'flex', justifyContent: 'center'}}>
                <span className="title" style={{ color: mode ? '#8C8F7C' : '#768f9c', marginRight:'8px', display:'flex', alignItems:'center', whiteSpace:'pre-wrap'}}>
                    {'2019 |'}
                </span>
                <span className="title" style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d}}>
                    Ay Sueño Qué Me Traerás
                </span>
            </Typography>
            <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2}>
                <SwiperCard>
                    {Cd1?.map((item1, idx) => (
                        <Box key={idx}>
                            {item1.id && 
                                <SwiperSlide>
                                    <VideoCard año={2019} video={item1} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch}/>
                                </SwiperSlide>
                            }
                        </Box>
                    ))}
                </SwiperCard>
            </Stack>
        </Box>
    )
}

export default Discography