import React from "react";
import {
    Typography, makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
    footer: {
        position: 'stick',
        bottom: 20,
        margin: '50px 0 0 0',
        width: '100%',
        textAlign: 'center',
        padding: '10px 0 10px 0',

    },
})


const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
                <Typography variant="body1">
                    Crafted with ❤️ by Ruth & Minja
                </Typography>
        </div>
    );
};

export default Footer;
