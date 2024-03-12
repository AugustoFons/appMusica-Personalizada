import * as React from 'react';
import { Divider, ListItemText, ListItem, List, Typography } from '@mui/material'

const Blog = () => (
        <List>
                        <Divider variant="middle" component="li" />

            <ListItem>
            <Typography className='blog' variant='h3' fontWeight='semibold' mt={1} sx={{maxWidth: 700, mx: 'auto', color: 'green2019d'}}>
                <span className="title" >
                    Ni Loco
                    <Divider component="li" sx={{width: '90%', marginTop: '-6px',borderColor: '#516655', borderWidth: '1px', filter: 'blur(2px)'}} />
                </span>
                <span className="title" style={{ color:'#8C8F7C', marginRight:'0px', display:'flex', alignItems:'end', whiteSpace:'pre-wrap', fontSize:'18px', marginLeft:'auto'}}>
                    {'12/03/2024'}
                </span>
            </Typography>
            </ListItem>
            <ListItem>
            <Typography variant='body1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'justify', color: 'green2019d' }}>
                <span  className="title" sx={{ lineHeight: 1.2 }}>
                    <strong className="first-letter">H</strong><strong>abíamos leído </strong>mucho sobre psicosis pero aún no nos habíamos encontrado con la locura cara a cara. Cursábamos 4to año de la facultad y tocaba la presentación de pacientes. La primer presentación me tocó en Romero un día de lluvia. Todo era gris y sobre lo gris se recortaban figuras de árboles muy verdes de cuyas hojas caían gotas muy grises. El primer paciente se llamaba Norberto. En principio tenía un discurso conservado. Contaba como lo injusto del destino se entrometió en su vida despojándolo de su trabajo de camionero, su mujer y sus hijos. Como quien no quiere la cosa y al pasar mencionó la palabra "Diós". El profesor, seguramente ya lo conocía de otras presentaciones, pero igual hizo gala de su sapiencia y astucia, y se agarró de esa palabra para empezar a tirar de la lana y destejer el pullover de "normalidad" de Norberto. Éste empezó a desplegar sus primeros contactos con Diós, a través de señales, la sensación de electricidad en su cuerpo y cómo acabaría siendo un enviado directo del Señor, armando un plan para salvar al hombre en la tierra. 
                    Ya de regreso, instalado en el departamento, seguía lloviendo. A la tardecita noche suena el timbre. Era mí amigo y compañero Juliàn Ardesi. Tenía la costumbre de andar sin paraguas y aunque había adquirido cierta habilidad para moverse bajo los aleros y esquivando gotas, aún así tenía lluvia en su pelo, cara y ropa. Lo primero que dijo fue que estaba preocupado y quería saber cómo me encontraba. Suponía que la lluvia, tanto gris y la locura, podrían ser un caldo gordo, difícil de colar incluso para el psiquismo más sano y estable, y ese quizás, no era precisamente el mio. Así que ahí estaba, para que a fuerza de palabra, risa y mate, el caldo se haga más digerible y la experiencia sea apropiada sin perjuicio.
                    Ni loco fue escrita en aquella época, tomando como base los primeros acercamientos a los Fenómenos elementales de la psicosis. Sin duda, también el escribir la canción fue mí forma particular de digerir, procesar y elaborar aquellas experiencias.
                </span>
            </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    );

export default Blog