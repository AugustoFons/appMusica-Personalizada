import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box, Switch } from '@mui/material'
import { Navbar, Feed, VideoId } from './components'
import { fetchApi } from './utils/fetchApi'
import { useEffect, useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

const App = () => {
    const [selected, setSelected] = useState('Bio')
    const [mode, setMode] = useState(true)
    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked((prev) => !prev);
    };

    const [Cd1, setCd1] = useState()
    const [Cd2, setCd2] = useState()
    const [idCd, setIdCd] = useState()

    useEffect(() => {
        fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSL1elkki8dVWvxrMXCgXJOU&part=snippet&order=date`).then(
            (data) => setCd1(data?.items))
        fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSIeCA60-xVrtUWlJnV_LlPh&part=snippet&order=date`).then(
            (data) => setCd2(data?.items))
    }, [selected == 'Discografia'])

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Box sx={{ backgroundColor: mode ? 'bg2019' : 'bg2022' }}>
                    <Navbar mode={mode} setMode={setMode} checked={checked} toggleSwitch={toggleSwitch} />
                    <Routes>
                        <Route path='/' exact element={<Feed Cd1={Cd1} Cd2={Cd2} selected={selected} setSelected={setSelected} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch} />} />
                        <Route path='/video/:id' element={<VideoId Cd1={Cd1} Cd2={Cd2} idCd={idCd} setIdCd={setIdCd} mode={mode} setMode={setMode} toggleSwitch={toggleSwitch} />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>

    )
}

export default App