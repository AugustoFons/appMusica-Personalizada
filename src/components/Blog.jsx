import * as React from 'react';
import { Divider, ListItem, List, Typography } from '@mui/material'
import { DataBlog } from '../utils/constants'
import { useState } from 'react';
import { useEffect } from 'react';


const Blog = ({mode}) => {
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await DataBlog();
                setBlogData(data);
                console.log(data)
            } catch (error) {
                console.error('Error en los datos del blog:', error)
            }
        };
        fetchData()
    }, [])
    console.log(blogData)


return (
    blogData.map((item) => (

        <List>
            <Divider variant="middle" component="li" />
            <ListItem>
            <Typography className='blog' variant='h3' fontWeight='semibold' mt={1} sx={{maxWidth: 700, mx: 'auto', color: mode ? 'green2019d' : 'blue2022d'}}>
                <span className="title" >
                    {item.titulo}
                    <Divider component="li" sx={{width: '90%', marginTop: '-6px',borderColor: mode ? 'green2019d' : 'blue2022d' , borderWidth: '1px', filter: 'blur(2px)'}} />
                </span>
                <span className="title" style={{ color: mode ? '#8C8F7C' : '#768f9c', marginRight:'0px', display:'flex', alignItems:'end', whiteSpace:'pre-wrap', fontSize:'18px', marginLeft:'auto'}}>
                    {item.fecha}
                </span>
            </Typography>
            </ListItem>
            <ListItem>
            <Typography variant='body1' sx={{ maxWidth: 700, mx: 'auto', textAlign: 'justify', color: mode ? 'green2019d' : 'blue2022d' }}>
                <span  className="title" sx={{ lineHeight: 1.2 }}>
                    <strong className="first-letter">{item.primerLetra}</strong><strong>{item.resaltado}</strong>{item.texto.substring(14, item.texto.length - 1).replace(/^"|"$/g, '')}
                </span>
            </Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    ))

    );}

export default Blog