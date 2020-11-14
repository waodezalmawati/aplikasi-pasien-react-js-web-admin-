import React from 'react';
import { /*fade,*/ makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import MenuList from '@material-ui/core/MenuList';
import MenuItem from "@material-ui/core/MenuItem";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
            width: 90,
            flexShrink: 0,
        },
    drawerPaper: {
            width: 270,
            padding: 10,
        },
    
    heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));
    
    export default function SideBar() {
        const classes = useStyles();

        return (
            <div className={classes.root} >
                <Drawer 
                className={classes.drawer}
                variant="permanent"
                position="static"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
                >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {
                        <MenuList>
                            <MenuItem>
                            <ListItemIcon>
                                <HomeIcon fontSize='small'/>
                                </ListItemIcon>
                                <Button variant='inherit'
                                href ='/'
                                >
                                    Home
                                </Button>
                            </MenuItem>
                            ,
                            <MenuItem>
                                <ListItemIcon>
                                <SettingsIcon fontSize='small' />
                                    </ListItemIcon>
                                <Button variant='inherit'
                                href ='/Pengaturan'>
                                    Pengaturan
                                </Button>
                            </MenuItem>
                        </MenuList>
                }
            </List>
        <Divider />
    </Drawer>
    </div>
    );
}
