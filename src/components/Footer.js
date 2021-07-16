import React from "react";
import { BottomNavigation, Typography } from '@material-ui/core'

const Footer = () => {
    return (
        <div>
            <BottomNavigation color="secondary" >
                  <Typography variant="body2" >
                Crafted with ❤️ by Ruth & Minja
                </Typography>
            </BottomNavigation>
        </div>
    );
};

export default Footer;
