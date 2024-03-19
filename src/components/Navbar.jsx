import { SwitchMode } from './';
import { Stack, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo, logo2022 } from '../utils/constants'
import firma2019 from '../utils/images/sc.png'
import firma2022 from '../utils/images/firma.png'


const Navbar = ({mode, setMode, checked, toggleSwitch}) => (
    <Box className={mode ? 'nav2019' : 'nav2022'}  sx={{position: 'sticky', top:0, zIndex:'20', width:'100%'}}>
        <Stack direction='row' alignItems='center' pt={1} sx={{backdropFilter:'blur(0px)', display: 'flex', justifyContent: 'space-between',}}>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', marginLeft: mode ? '10px' : '-18px', marginTop: '4px'}}>
                <span style={{display: 'flex', alignItems: 'center'}}>
                    <SwitchMode className='modeP' onClick={() => !setMode(!mode)} checked={checked} onChange={toggleSwitch}  />
                </span>
                <Link to={'/'}>
                    <img src={mode ? firma2019 : firma2022} alt="Bernardo Schiavi" height={56} style={{backdropFilter:'blur(10px)', marginLeft: mode ? '-30px' : '2px', marginBottom: '1px'}} /> {/* h:68 ml:9 */}
                </Link>
            </Box>
        </Stack>
    </Box>
)

export default Navbar