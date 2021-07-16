import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Restaurant = () => {
    const [name, setName] = useState(null);
    const { id } = useParams();

    axios
        .get(`https://yelp-backend-crossover.herokuapp.com/restaurants/${id}`)
        .then((res) => {
            console.log(res.data);
            setName(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <div>
            {name && (
				<h1>{name.name}</h1>
			)}
        </div>
    );
};

export default Restaurant;
