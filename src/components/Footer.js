import React from "react";
import {
    BottomNavigation,
    Typography,
    BottomNavigationAction,
} from "@material-ui/core";
import { LabelIcon, LocationCity } from "@material-ui/icons";

const Footer = () => {
    return (
        <div>
            <BottomNavigation color="secondary">
                <BottomNavigationAction
                    label="Tags"
                    value="tags"
                    icon={LabelIcon}
                />
                <BottomNavigationAction
                    label="Cities"
                    value="cities"
                    icon={LocationCity}
                />
                <Typography variant="body2">
                    Crafted with ❤️ by Ruth & Minja
                </Typography>
            </BottomNavigation>
        </div>
    );
};

export default Footer;
