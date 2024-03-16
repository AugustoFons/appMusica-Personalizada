import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { VideoCard, Discography } from './'
import { Box, Stack } from '@mui/material'

const VideoId = ({Cd1, Cd2, idCd, setIdCd, mode, toggleSwitch, setMode}) => {
    const { id } = useParams()

    const [key, setKey] = useState(0);
    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [id]);

    return (
        <Box minHeight='95vh'>
        {    idCd === 'PLse4d4Ax_CSL1elkki8dVWvxrMXCgXJOU'  &&      
            (<Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px', py:2}}>
                        <ReactPlayer 
                            key={key} // para forzar la remontaje del componente ya que si selecciono otro tema ya no me aparece como playlist
                            url={`https://www.youtube.com/watch?v=${id}`} 
                            className="react-player" 
                            controls
                            config={{ youtube: { 
                                    playerVars: {
                                    listType:'playlist',
                                    list: idCd
                                    }
                                }}}
                        />
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                        {Cd1?.map((item1, idx) => (
                            <Box  py={1} key={idx}>
                                {item1.id &&<VideoCard video={item1} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch}/>}
                            </Box>
                        ))}
                </Box>
            </Stack>)}
        {    idCd === 'PLse4d4Ax_CSIeCA60-xVrtUWlJnV_LlPh'    &&       
            (<Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px', py:2}}>
                        <ReactPlayer
                            key={key} 
                            url={`https://www.youtube.com/watch?v=${id}`} 
                            className="react-player" 
                            controls
                            config={{ youtube: { 
                                    playerVars: {
                                    listType:'playlist',
                                    list: idCd
                                    }
                                }}}
                        />
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
                        {Cd2?.map((item2, idx) => (
                            <Box py={1} key={idx}>
                                {item2.id &&<VideoCard video={item2} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch}/>}
                            </Box>
                        ))}
                </Box>
            </Stack>)}
        </Box>
    )
}

export default VideoId