import React from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Button,
    Typography,
    Grid,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 60,
    },
    image: {
        width: "100%",
    },
    card: {
        width: "300px",
    },
});

const Restaurants = ({ restaurant }) => {
    const history = useHistory();
    const classes = useStyles();
    console.log(restaurant);
    return (
        <Grid item xs={12} className={classes.container}>
            <Card
                key={restaurant.id}
                variant="outlined"
                className={classes.card}
            >
                <CardContent>
                    <img src={restaurant.image_url} className={classes.image} />
                    <Typography variant="h6">{restaurant.name}</Typography>
                    <Typography variant="body1">{restaurant.city}</Typography>
                    <Typography variant="body1">{restaurant.tag}</Typography>
                    <Typography variant="body1">
                        {restaurant.description}
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                            history.push(`/restaurants/${restaurant.id}`)
                        }
                    >
                        Show
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Restaurants;
