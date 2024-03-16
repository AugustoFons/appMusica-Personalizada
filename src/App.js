import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Switch } from '@mui/material'
import { Navbar, Feed, VideoId } from './components'
import { fetchApi } from './utils/fetchApi'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        green2019d: "#526656",
        green2019hover: '#CBCF88',
        bg2019: '#F1EFCC',
        blue2022d: '#28306E',
        blue2022hover: '#1185C7',
        bg2022: '#c1d4de',
    },
});
/*         green2019d: "#28306E",
    green2019hover: '#1185C7', */

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    position: 'fixed',
    zIndex:10,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundSize: '100%',
                backgroundImage: `url('https://res.cloudinary.com/ddgzljvfv/image/upload/v1710446603/Untitled_Project__1_-removebg-preview_oid6ed.png')`, // Reemplazamos la URL por tu imagen
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#526656' : '#28306E',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundImage: `url('https://res.cloudinary.com/ddgzljvfv/image/upload/v1697934842/logo-bernar_uy8kj5.png')`, // Reemplazamos la URL por tu imagen
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#28306E' : '#526656',
        borderRadius: 20 / 2,
    },
}));

const App = () => {
    const [selected, setSelected] = useState('Bio')
    const [mode, setMode] = useState(true)

    const [Cd1, setCd1] = useState()
    const [Cd2, setCd2] = useState()
    const [idCd, setIdCd] = useState()

/*     useEffect(() => {
        fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSL1elkki8dVWvxrMXCgXJOU&part=snippet&order=date`).then(
            (data) => setCd1(data?.items))
        fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSIeCA60-xVrtUWlJnV_LlPh&part=snippet&order=date`).then(
            (data) => setCd2(data?.items))
    }, [selected == 'Discografia']) */

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{ backgroundColor: mode ? 'bg2019' : 'bg2022' }}>
                <MaterialUISwitch className='modeP' sx={{ m: 1 }} onClick={() => !setMode(!mode)} />

                    <Navbar mode={mode} />
                    <Routes>
                        <Route path='/' exact element={<Feed Cd1={Cd1} Cd2={Cd2} selected={selected} setSelected={setSelected} setIdCd={setIdCd} mode={mode} />} />
                        <Route path='/video/:id' element={<VideoId Cd1={Cd1} Cd2={Cd2} idCd={idCd} setIdCd={setIdCd} />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default App