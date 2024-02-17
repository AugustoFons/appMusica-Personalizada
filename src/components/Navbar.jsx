import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import firma from '../utils/images/firma3.png'

const Navbar = () => (
    <Box className='banner-navbar'  sx={{position: 'sticky', top:0, zIndex:'20'}}>
        <Stack direction='row' alignItems='center' p={2} sx={{backdropFilter:'blur(0px)', display: 'flex', justifyContent: 'space-between',}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Link to='/' style={{display: 'flex', alignItems: 'center', marginLeft:16}}>
                    <img src={logo} alt="logo" height={80} />
                </Link>
                <img src={firma} alt="Bernardo Schiavi" height={49} style={{marginLeft:12, backdropFilter:'blur(10px)'}} /> {/* h:68 ml:9 */}
            </Box>
            <SearchBar />
        </Stack>

    </Box>
)

export default Navbar