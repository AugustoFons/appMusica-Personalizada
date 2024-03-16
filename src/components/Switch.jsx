import { Switch } from '@mui/material'
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

const SwitchMode = styled(Switch)(({ theme }) => ({
    width: 144,
    height: 88,
    padding: 34,
    zIndex:10,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            transform: 'translateX(56px)',
            '& .MuiSwitch-thumb:before': {
                backgroundSize: '100%',
                backgroundImage: `url('https://res.cloudinary.com/ddgzljvfv/image/upload/v1710446603/Untitled_Project__1_-removebg-preview_oid6ed.png')`, // Reemplazamos la URL por tu imagen
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#526656' : '#1185C7',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        width: 82,
        height: 82,
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

export default SwitchMode