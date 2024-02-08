import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';



export default function DividerVariants() {
    return (
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
}