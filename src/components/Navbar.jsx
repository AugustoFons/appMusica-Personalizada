import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo, logo2022 } from '../utils/constants'
import SearchBar from './SearchBar'
import firma from '../utils/images/firma3.png'
import firma2022 from '../utils/images/firma.png'


const Navbar = ({mode}) => (
    <Box className={mode ? 'nav2019' : 'nav2022'}  sx={{position: 'sticky', top:0, zIndex:'20'}}>
        <Stack direction='row' alignItems='center' p={2} sx={{backdropFilter:'blur(0px)', display: 'flex', justifyContent: 'space-between',}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Link to='/' style={{display: 'flex', alignItems: 'center', marginLeft:16}}>
                        <img src={mode ? logo : logo2022} alt="logo" height={80} />
                </Link>
                <img src={mode ? firma : firma2022} alt="Bernardo Schiavi" height={49} style={{marginLeft:12, backdropFilter:'blur(10px)'}} /> {/* h:68 ml:9 */}
            </Box>
            <SearchBar />
        </Stack>

    </Box>
)

export default Navbar