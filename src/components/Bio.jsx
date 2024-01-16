import { Grid, Box, Typography } from "@mui/material";
import bio1 from '../utils/images/bio1.png'
import bio2 from '../utils/images/bio2.png'
import bio3 from '../utils/images/bio3.png'


const Bio = () => {
    return (
        <Box>
            <Typography variant='body1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'justify', mt: 2 }}>
                <span  className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                    <strong className="first-letter">B</strong><strong>ernardo Schiavi</strong>, nacido y criado en Lincoln, provincia de Buenos Aires, vivió allí hasta los 17 años, edad en la que se trasladó a la ciudad de La Plata para iniciar sus estudios de Licenciatura en Psicología. Actualmente, reside en esa ciudad y ejerce su profesión. En su infancia, comenzó a escribir poemas y letras de canciones, siempre con la idea de desarrollar un proyecto artístico centrado en la composición musical.<br /> No fue hasta el año 2014 que se asoció con Ezequiel Varano, músico y productor musical, para llevar a cabo este proyecto. Juntos, comenzaron a dar vida a sus creaciones originales. En 2019, publicaron su primer disco titulado "Ay, sueño, ¿qué me traerás?" y en 2022 lanzaron el segundo, llamado "¿Por qué no?" Aunque estos álbumes presentan una variedad de ritmos, estilos y temáticas en sus letras, se pueden clasificar dentro del género de música popular.
                </span>
            </Typography>
            <Box sx={{ maxWidth: 700, mx: 'auto', mt: 2 }}>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={4}>
                        <img src={bio2} alt="Placeholder 1" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src={bio1} alt="Placeholder 2" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <img src={bio3} alt="Placeholder 3" style={{ width: '100%', height: 'auto' }} />
                    </Grid>
                </Grid>
            </Box>
            <Typography variant='subtitle1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'center', mt: 2 }}>
                <span className="title" sx={{ lineHeight: 1.2 }} style={{ color: '#516655' }}>
                    <strong>{`" `}</strong>Los Sueños nunca dejan huellas claras<br /> para seguirlos o para volver atrás,<br />pues el camino dicen se hace al andar<strong>{` "`}</strong>
                </span>
            </Typography>
        </Box>
    )
}

export default Bio
