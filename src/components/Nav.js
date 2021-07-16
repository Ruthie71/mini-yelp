import React from "react";
import { Link } from "react-router-dom";
import { makeStyles,AppBar, Toolbar, Typography } from "@material-ui/core";
import LabelIcon from '@material-ui/icons/Label';
import LocationCityIcon from '@material-ui/icons/LocationCity';


const useStyles = makeStyles({
    navBar: {
        marginBottom: 100,
    },
    toolbar: {
        '& > *': {
            color: '#fff'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            color: '#fff',
            padding: '0 20px',
            textDecoration: 'none'
        }
    }
})

const Nav = () => {
    const classes = useStyles()

    return (
        <div>
            <AppBar position="static" variant='outlined' color="secondary" className={classes.navBar}>
                <Toolbar className={classes.toolbar}>
                    <Link to="/" >
                        <img src={'https://www.freeiconspng.com/uploads/chef-hat-png-5.png'} alt='Logo' width='36px' style={{ color: '#fff'}} />
                    </Link>
                    <div className={classes.icons}>
                    <Link to="/tags">
                       <LabelIcon />
                       <Typography>Tags</Typography>
                    </Link>
                    <Link to="/cities">
                       <LocationCityIcon />
                       <Typography>Cities</Typography>
                    </Link>
                    </div>
                    
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
