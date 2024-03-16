import { SwitchMode } from './';
import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo, logo2022 } from '../utils/constants'
import SearchBar from './SearchBar'
import firma from '../utils/images/firma3.png'
import firma2022 from '../utils/images/firma.png'


const Navbar = ({mode, setMode}) => (
    <Box className={mode ? 'nav2019' : 'nav2022'}  sx={{position: 'sticky', top:0, zIndex:'20', width:'100%'}}>
        <Stack direction='row' alignItems='center' pt={1} sx={{backdropFilter:'blur(0px)', display: 'flex', justifyContent: 'space-between',}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', marginLeft: mode ? '28px' : '0px', marginTop: '4px'}}>
                <span style={{display: 'flex', alignItems: 'center'}}>

                    <SwitchMode className='modeP' onClick={() => !setMode(!mode)} />
                </span>
                <img src={mode ? firma : firma2022} alt="Bernardo Schiavi" height={46} style={{backdropFilter:'blur(10px)', marginLeft: mode ? '-30px' : '10px', marginBottom: '10px'}} /> {/* h:68 ml:9 */}
            </Box>
            <SearchBar />
        </Stack>

    </Box>
)

export default Navbar