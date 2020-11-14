import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// component
import AppBar from '../components/AppBar';
// main Pages
import Home from '../pages/Home';
import List from '../pages/List';
import View from '../pages/View';
import Edit from '../pages/Edit';
import Pengaturan from '../pages/Pengaturan';


function Routers(props) {
    return (
        // <div className={classes.root}>
        <Router>
            <CssBaseline />
            <AppBar/>
            <Fragment>
                <Route path='/' exact component={Home} />
                <Route path='/List' component={List} />
                <Route path='/View' component={View} />
                <Route path='/Edit' component={Edit} />
                <Route path='/Pengaturan' component={Pengaturan} />
                
            </Fragment>
                

            {/* <Footer /> */}
        </Router>
        // </div>
    );
}

export default Routers;
