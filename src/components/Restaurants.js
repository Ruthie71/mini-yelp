import React from "react";

const Restaurants = ({ restaurants }) => {
    console.log(restaurants);
    return (
        <div>
            <div>
                <h1>Restaurants</h1>
            </div>
            <div>
                <h2>{restaurants.name}</h2>
            </div>
            <div>
                <p>{restaurants.city}}</p>
            </div>
            <div>
                <p>c{restaurants.category}</p>
                <ul>
                    <li>fist line address</li>
                    <li>second line address</li>
                    <li>code</li>
                </ul>
            </div>
            <div>
                <p>description</p>
            </div>
            <div>
                <img>image</img>
            </div>
            <div></div>
        </div>
    );
};

export default Restaurants;
