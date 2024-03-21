import { Divider, ListItem, List, Box, Grid, Typography } from '@mui/material'
import copiar from '../utils/images/copy.png'
import { useState } from 'react'
import { useTheme } from '@mui/material';

const Colaborar = ({mode}) => {
    const theme = useTheme();

    const [copied, setCopied] = useState("");
    const handleCopy = (text) => {
        setCopied(text);
        navigator.clipboard.writeText(text);
        setTimeout(() => setCopied(""), 3000);
    };

    return (
        <Box style={{ width: '100%'}}>
            <Typography variant='body1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'justify', mt: 2, color: mode ? 'green2019d' : 'blue2022d' }}>
                <span  className="title" sx={{ lineHeight: 1.2 }}>
                    <strong className="first-letter">S</strong><strong>i te gusta </strong>
                    lo que hacemos y querés colaborar para que sigamos desarrollando nuestra propuesta artística, lo podés hacer a nuestra cuenta del Banco provincia. 
                </span>
            </Typography>
            <Box className={mode ? 'pago2019' : 'pago2022'} sx={{ borderRadius: '10px', margin: '32px auto',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <List>
                    <ListItem sx={{ width: { xs: '250px', sm: '310px' } }}>
                        <Grid container alignItems="center">
                            <Grid item>
                                <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d }}>
                                    <strong>ALIAS</strong>
                                </span>
                            </Grid>
                            <Grid item xs>
                                <Divider variant="middle" component="li" />
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container alignItems="center" justifyContent="center">
                            <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d }}>
                                berna64y1
                            </span>
                            <span className='copy_btn' onClick={() => handleCopy('berna64y1')}>
                                <img src={copiar} alt="copiar" style={{ width: '18px'}} />
                            </span>
                        </Grid>
                    </ListItem>
                    <ListItem sx={{ width: { xs: '250px', sm: '310px' } }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Divider variant="middle" component="li" />
                            </Grid>
                            <Grid item>
                                <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d }}>
                                    <strong>CBU</strong>
                                </span>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container alignItems="center" justifyContent="center">
                            <span  className='copy_btn' onClick={() => handleCopy('0140999803200058546799')}>
                                <img src={copiar} alt="copiar" style={{ width: '18px' }} />
                            </span>
                            <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: mode ? theme.palette.green2019d : theme.palette.blue2022d }}>
                                0140999803200058546799
                            </span>
                        </Grid>
                    </ListItem>
                </List>
            </Box>
        </Box>


    )
}

export default Colaborar