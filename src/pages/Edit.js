import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 320,
    },
    paper: {
        height: 800,
        width: 1000,
        
    },
    //untuk text filled :
    rootField: {
        '& > *': {
          margin: theme.spacing(1),
          width: 956,
        //   display: 'flex',
        },
      },
      input: {
        display: 'none',
      },
      button: {
        margin: theme.spacing(1),
      },
      rootCard: {
          width: 500,
          height: 200,
      },
}));

export default function Edit() {
    const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div>
        
        <Grid container className={classes.root} spacing={2}>
            <CssBaseline />
            <Grid item xs={12}>
                <Grid container spacing={spacing} >
                <Grid item>
                    <Paper className={classes.paper} style={{ backgroundColor: '#5ed6e6'}} >
                    <Card className={classes.rootCard}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Profil"
                        height="300"
                        width="50"
                        image="Logo Politeknik Negeri Ujung Pandang.png"
                        title="Profil"
                        />
                    </CardActionArea>
                    </Card>
                    <h2 style={{justify:'Center'}}>Rumah Sakit Awal Bross</h2> 
                    <Divider/>
                    
                    <div>
                        {/* ini textfilled : */}
                    <form className={classes.rootField} noValidate autoComplete="off">
                    <h3 style={{ textAlign:'Left'}} >Fasilitas Kesehatan</h3>
                    <TextField id="outlined-basic" label="Fasilitas Kesehatan" variant="outlined" />
                    <h3 style={{ textAlign:'Left'}} >Alamat</h3>
                    <TextField id="outlined-basic" label="Alamat" variant="outlined" />
                    <h3 style={{ textAlign:'Left'}} >Email </h3>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <h3 style={{ textAlign:'Left'}} >Status</h3>
                    <TextField id="outlined-basic" label="Status" variant="outlined" />
                    </form>
                    </div>
                    <div>
                    <Button 
                        variant='contained'
                        className={classes.button} 
                        size='large' 
                        startIcon={<SaveIcon />} 
                        color='Primary'>
                         Save 
                    </Button>
                    </div>
                    
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            </div>
            );
}