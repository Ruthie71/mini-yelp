import React, { useState, useEffect } from "react";
import Restaurants from "./Restaurants";
import Loading from "./Loading";
import axios from "axios";
import { TextField } from "@material-ui/core";

const Results = () => {
    const [restaurants, setRestaurants] = useState("");
    // const [cities, setCities] = useState([])
    // const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("");
    // const [error, setError] = useState(false);

    useEffect(() => {
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
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading && <Loading />}
            <TextField
                variant="outlined"
                size="small"
                label="Search for Restaurant"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {restaurants &&
                restaurants
                    .filter((restaurant) => {
                        if (input === "") {
                            return restaurant;
                        } else if (
                            restaurant.name
                                .toLowerCase()
                                .includes(input.toLowerCase())
                        ) {
                            return restaurant;
                        } else {
                            return console.log("No results found");
                        }
                    })
                    .map((restaurant) => (
                        <Restaurants restaurant={restaurant} />
                    ))}
        </div>
    );
};

export default Results;
