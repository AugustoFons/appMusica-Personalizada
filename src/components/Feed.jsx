import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Discography, Bio, Redes } from './'
import { categories } from '../utils/constants'

const Feed = ({Cd1, Cd2, selected, setSelected, setIdCd}) => {

    return (
        <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
            <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx:0, md:0}}}> 
            <Sidebar
            selected={selected}
            setSelected={setSelected}
            />
            
            <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#000'}}>
                Copyright 2023 Bernardo Schiavi
            </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex:2}}>
                <Typography variant='h4' fontWeight='bold' mb={2} sx={{display:'flex'}}>
                    {categories.map((category) => (
                        category.name == selected &&
                        <span style={{ color:'#516655', marginRight:'10px', display:'flex', alignItems:'center', transform: 'scale(1.3)'}}>
                            {category.iconFeed}
                        </span>
                    ))

                    }
                    <span className='title' style={{ color:'#516655', letterSpacing: '2px', marginTop:'10px'}}>
                        {selected}
                    </span>
                </Typography>

                {
                    selected == 'Discografia' &&
                    <Discography Cd1={Cd1} Cd2={Cd2} setIdCd={setIdCd} />
                }
                {
                    selected == 'Bio' &&
                    <Bio />
                }
                {
                    selected == 'Redes' &&
                    <Redes />
                }
            </Box>

        </Stack>
    )
}

export default Feed