import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 320,
    },
    paper: {
        height: 950,
        width: 1000,
        textAlign: 'center',
    },
    //untuk text filled :
    rootField: {
        '& > *': {
          margin: theme.spacing(1),
          width: 956,
          display: 'flex',
        },
      },
      input: {
        display: 'none',
      },
      button: {
        margin: theme.spacing(1),
      },
      rootCard: {
          borderRadius: 100,
          width: 200,
          height: 200,
          padding: 0,
          marginLeft: 405,
          //marginTop: 90,
      },
}));

export default function Pengaturan() {
    const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        
        <Grid container className={classes.root} spacing={2}>
            <CssBaseline />
            <Grid item xs={12}>
                <Grid container spacing={spacing} >
                <Grid item>
                    <Paper className={classes.paper} justify="center" style={{ backgroundColor: '#ffa6d2'}} >
                    <div>
                        {/* Foto dan button Upload & Delete : */}
                        {/* ada foto  */}
                        <div>
                        <Card className={classes.rootCard}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Profil"
                                height="200"
                                image="Logo Politeknik Negeri Ujung Pandang.png"
                                title="Profil"
                                />
                            </CardActionArea>
                            </Card>
                        </div>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained"
                                color="primary" component="span"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                                >
                                Unggah
                                </Button>
                            </label>
                            
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                            >
                                Hapus
                            </Button>
                            </div>

                    <div>
                        {/* ini textfilled : */}
                    <form className={classes.rootField} justify="center" noValidate autoComplete="off" style={{ Color: '#ffffff'}}>
                        <TextField id="outlined-basic" label="Username" variant="outlined" />
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                        <TextField id="outlined-basic" label="Password Lama" variant="outlined" />
                        <TextField id="outlined-basic" label="Password Baru" variant="outlined" />
                        <TextField id="outlined-basic" label="Konfirmasi Password" variant="outlined" />
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
            );
}