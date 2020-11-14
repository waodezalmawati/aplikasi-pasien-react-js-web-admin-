import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
//import Divider from '@material-ui/core/Divider';

//import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingLeft: 280,
    },
    // paper: {
    //     height: 300,
    //     // width: 1000,
    //     padding: theme.spacing(0),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     //paddingLeft: 320,
        
    // },
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
        marginRight: 25,
      },
      rootCard: {
        borderRadius: 150,
        width: 300,
        height: 300,
        padding: 0,
        marginLeft: 5,
      },
      //untuk tabel :
      table: {
        minWidth: 400,
      },
}));

function createData(name, result) {
    return { name, result };
  }
  
  const rows = [
    createData('FasKes', 'RS. Awal Bross'),
    createData('Email', 'awalbrossinfo@gmail.comm'),
    createData('Alamat', 'Makassar'),
    createData('Status', 'Aktif'),
  ];

  function createDataInfo(nameInfo, resultInfo) {
    return { nameInfo, resultInfo };
  }
  
  const rowsInfo = [
    createDataInfo('Tanggal Bergabung', '21 Januari 2020'),
    createDataInfo('Jumlah Pasien', 160),
    createDataInfo('Keterangan', 'SIM RS'),
   
  ];

export default function View() {
    //const [spacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div>
              <Paper>
                <Grid className={classes.root} container spacing={0}>
                <Grid item xs={4}>
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
                </Grid>
                <Grid item xs={8}>
                
                        {/* ini table */}
                        <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell> </TableCell>
                                <TableCell align="right"> </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.result}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        >
                            Edit
                        </Button>
                        <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        >
                            Hapus
                        </Button>
                    
                </Grid>
            </Grid>
            </Paper>

        <Paper>
            {/* ini table */}
            <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell style={{ backgroundColor: '#e6ac49'}} > Information </TableCell>
                    <TableCell style={{ backgroundColor: '#e6ac49'}} align="right"> </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rowsInfo.map((row) => (
                    <TableRow key={row.nameInfo}>
                    <TableCell component="th" scope="row">
                        {row.nameInfo}
                    </TableCell>
                    <TableCell align="left">{row.resultInfo}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Paper>
        </div>
        
    );
}