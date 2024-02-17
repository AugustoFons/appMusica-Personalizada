import * as React from 'react';
import { Divider, ListItemText, ListItem, List } from '@mui/material'

const Blog = () => (
        <List>
            <ListItem>
                <ListItemText primary="Full width variant below" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
                <ListItemText primary="Inset variant below" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemText primary="Middle variant below" />
            </ListItem>
            <Divider variant="middle" component="li" />
            <ListItem>
                <ListItemText primary="List item" />
            </ListItem>
        </List>
    );

export default Blog