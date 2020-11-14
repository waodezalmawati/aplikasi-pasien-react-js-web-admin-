import React from 'react';
import { /*fade,*/ makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 280,
    },
    paper: {
        height: 320,
        width: 500,
        textAlign: 'center',
        
    },
}));

export default function Home() {
    const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <CssBaseline />
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing} >
                <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ backgroundColor: '#8bc9c0'}} >
                        <h1>Fasilitas Kesehatan</h1>
                        <h3>130</h3>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ backgroundColor: '#e6ac49'}} >
                    <h1>Kepuasan</h1>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ backgroundColor: '#bfa2f5'}} >
                    <h1>Aktivitas</h1>
                    </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper className={classes.paper} style={{ backgroundColor: '#ff87bf'}} >
                    <h1>Customer</h1>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            );
}
