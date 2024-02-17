import { Divider, ListItem, List, Box, Grid } from '@mui/material'

const Colaborar = () => {

    return (
        <Box className='pago' sx={{ width: 360, height: 210, bgcolor: '#ADBE75', borderRadius: '10px', margin: '40px auto',  display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                        <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                            0140999803200058546799
                        </span>
                    </Grid>
                </ListItem>
            </List>
        </Box>

    )
}

export default Colaborar