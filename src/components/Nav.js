import React from "react";
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Nav = () => {
    return (
        <div>
            <AppBar position="static" >
                <Toolbar>
                    <Link to='/'>
                        <Typography variant='h6' color='secondary'>miniYelp</Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Nav;
