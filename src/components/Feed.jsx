import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Discography, Bio, Redes, Blog, Colaborar } from './'
import { categories } from '../utils/constants'
import { useEffect } from 'react'

const Feed = ({Cd1, Cd2, selected, setSelected, setIdCd, mode, setMode, toggleSwitch}) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selected]);

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' }, justifyContent: 'center' }}>
                <Box sx={{ height: { xs: 'auto', md: '88vh' }, width: { md: '207px' }, borderRight: '1px solid #3d3d3d', px: { xs: 0, md: 0 }, position: 'sticky', top: {xs: 98, md:110 }, zIndex: {xs: 1000, md: 0}, backgroundColor: {xs: 'transparent', md: mode ? 'green2019d' : 'blue2022d'} }}>
                <Sidebar
                selected={selected}
                setSelected={setSelected}
                mode={mode}
                />
                
                <Typography className='copyright' sx={{color: 'whitesmoke', mx:'auto', textAlign: 'center', fontSize: '12px', visibility: {xs: 'hidden', md: 'visible'}}}>
                © Copyright 2024 Bernardo Schiavi
                </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', flex:2}}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{display:'flex', color: mode ? 'green2019d' : 'blue2022d'}}>
                    {categories.map((category) => (
                        category.name == selected &&
                        <span style={{ marginRight:'10px', display:'flex', alignItems:'center', transform: 'scale(1.3)'}}>
                            {category.iconFeed}
                        </span>
                    ))

                    }
                    <span className='title' style={{ letterSpacing: '2px', marginTop:'10px'}}>
                        {selected}
                    </span>
                </Typography>

                {
                    selected == 'Discografia' &&
                    <Discography Cd1={Cd1} Cd2={Cd2} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch}/>
                }
                {
                    selected == 'Bio' &&
                    <Bio mode={mode}/>
                }
                {
                    selected == 'Redes' &&
                    <Redes mode={mode} />
                }
                {
                    selected == 'Blog' &&
                    <Blog mode={mode}/>
                }
                {
                    selected == 'Colaborar' &&
                    <Colaborar mode={mode}/>
                }
            </Box>

        </Stack>
    )
}

export default Feed