import React, { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import Loading from "./Loading";
import axios from "axios";
import Error from "./Error";
import { makeStyles, TextField, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        padding: 10,
        margin: "0 auto",
        textAlign: "center",
        width: "100%",
    },
    root: {
        margin: "60px auto",
    },
    textField: {
        width: "80%",
        margin: "40px auto",
        textAlign: "center",
    },
});

const Results = () => {
    const classes = useStyles();
    const [restaurants, setRestaurants] = useState("");
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        setError(false);
        setLoading(true);
        axios
            .get("https://yelp-backend-crossover.herokuapp.com/restaurants")
            .then((res) => {
                console.log(res.data);
                setRestaurants(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <div className={classes.container}>
            {loading && <Loading />}
            {error && <Error />}
            <TextField
                className={classes.textField}
                variant="outlined"
                size="medium"
                align="center"
                label="Search for Restaurants ..."
                color="secondary"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {restaurants &&
                restaurants
                    .filter((restaurant) => {
                        if (input === "") {
                            <Loading />;
                        } else if (
                            restaurant.name
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        ) {
                            return restaurant;
                        }
                    })
                    .map((restaurant) => (
                        <Grid container spacing={3} clasName={classes.root}>
                            <Restaurants restaurant={restaurant} />
                        </Grid>
                    ))}
        </div>
    );
};

export default Results;
