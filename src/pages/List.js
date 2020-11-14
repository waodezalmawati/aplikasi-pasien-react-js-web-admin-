import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';

// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    paddingLeft: 276,
    paddingRight: 20,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: { 
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
  //untuk Select : 
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex', 
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
   //untuk tabel :
   table: {
    minWidth: 400,
  },
}));


function createData(id, faskes, email, alamat, status) {
  return { id, faskes, email, alamat, status };
}

const rows = [
  createData('01', 'RS. Awal Bross', 'awalbrossinfo@gmail.com', 'Makassar', 'Aktif' ),
  createData('02', 'RS. Awal Bross', 'awalbrossinfo@gmail.com', 'Makassar', 'Aktif'),
  createData('03', 'RS. Awal Bross', 'awalbrossinfo@gmail.com', 'Makassar', 'Aktif'),
  createData('04', 'RS. Awal Bross', 'awalbrossinfo@gmail.com', 'Makassar', 'Aktif'),
];

export default function List() {
  const classes = useStyles();
  const [kategori, setKategori] = React.useState('');

  const handleChange = (event) => {
    setKategori(event.target.value);
  };

  return (
    <div>
      <Paper>
      <Grid className={classes.root} container spacing={0} style={{ backgroundColor: '#0275c7'}}>
              <Grid item xs={8 }>
                <div className={classes.search} >
                      <div className={classes.searchIcon} >
                        <SearchIcon />
                      </div>
                      <InputBase
                        placeholder="Search…"
                        classes={{
                          root: classes.inputRoot,
                          input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                      />
                  </div>
              </Grid>
              <Grid item xs={4}>
              
                  <div>
                    <FormControl variant="outlined" className={classes.formControl}  style={{ backgroundColor: '#5ab3f2'}}>
                      <InputLabel id="Select-Kategori">Kategori</InputLabel>
                      <Select
                        labelId="Select-Kategori"
                        id="select"
                        value={kategori}
                        onChange={handleChange}
                        label="Kategori"
                      >
                        <MenuItem value="">
                          <em>None</em> 
                        </MenuItem>
                        <MenuItem value={10}>Rumah Sakit</MenuItem>
                        <MenuItem value={20}>Puskesmas</MenuItem>
                        <MenuItem value={30}>Poli</MenuItem>
                      </Select>
                    </FormControl>
                  </div> 
                  </Grid>
          </Grid>
          </Paper>
          <Paper>
          <TableContainer className={classes.root} style={{ backgroundColor: '#36bfd1'}}component={Paper}>
          <Table className={classes.table} aria-label="simple table">
              <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">FasKes</TableCell>
                <TableCell align="right">Email&nbsp;</TableCell>
                <TableCell align="right">Alamat&nbsp;</TableCell>
                <TableCell align="right">Status&nbsp;</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                      {row.id}
                  </TableCell>
                  <TableCell align="right">{row.faskes}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.alamat}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
          </TableContainer>
          </Paper>
        </div>
        );
      }
       