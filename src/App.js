import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Box} from '@mui/material'
import { Navbar, Feed, SearchFeed, VideoId, Channel} from './components'
import { fetchApi } from './utils/fetchApi'
import { useEffect, useState} from 'react'


const App = () => {
    const [selected, setSelected] = useState('Discografia')

    const [Cd1, setCd1] = useState()
    const [Cd2, setCd2] = useState()
    const [idCd, setIdCd] = useState()

    useEffect(() => {
        fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSL1elkki8dVWvxrMXCgXJOU&part=snippet&order=date`).then(
            (data) => setCd1(data?.items))
            fetchApi(`playlistItems?playlistId=PLse4d4Ax_CSIeCA60-xVrtUWlJnV_LlPh&part=snippet&order=date`).then(
            (data) => setCd2(data?.items))
    }, [selected == 'Discografia'])

    return(
        <BrowserRouter>
            <Box sx={{backgroundColor: '#F1EFCC'}}>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed Cd1={Cd1} Cd2={Cd2} selected={selected} setSelected={setSelected} setIdCd={setIdCd} />} />
                    <Route path='/video/:id' element={<VideoId Cd1={Cd1} Cd2={Cd2} idCd={idCd} setIdCd={setIdCd} />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )}

export default App