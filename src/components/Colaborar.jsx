import { Divider, ListItem, List, Box, Grid, Typography } from '@mui/material'
import copiar from '../utils/images/copy.png'

const Colaborar = () => {

    return (
        <Box>
            <Typography variant='body1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'justify', mt: 2, color: 'green2019d' }}>
                <span  className="title" sx={{ lineHeight: 1.2 }}>
                    <strong className="first-letter">S</strong><strong>i te gusta </strong>
                    lo que hacemos y querés colaborar para que sigamos desarrollando nuestra propuesta artística, lo podés hacer a nuestra cuenta del Banco provincia. 
                </span>
            </Typography>
            <Box className='pago' sx={{ width: 360, height: 210, bgcolor: '#ADBE75', borderRadius: '10px', margin: '32px auto',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <List>
                    <ListItem sx={{width:'310px'}}>
                        <Grid container alignItems="center">
                            <Grid item>
                                <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
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
                            <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                                berna64y1
                            </span>
                            <span className='copy_btn'>
                                <img src={copiar} alt="copiar" style={{ width: '18px'}} />
                            </span>
                        </Grid>
                    </ListItem>
                    <ListItem sx={{width:'310px'}}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Divider variant="middle" component="li" />
                            </Grid>
                            <Grid item>
                                <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                                    <strong>CBU</strong>
                                </span>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem>
                        <Grid container alignItems="center" justifyContent="center">
                            <span  className='copy_btn'>
                                <img src={copiar} alt="copiar" style={{ width: '18px' }} />
                            </span>
                            <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
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