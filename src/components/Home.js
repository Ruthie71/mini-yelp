import React from "react";
import Search from "./Search";

const Home = () => {
    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <Search  {restaurants.map(restaurants)} => (
                    <Restaurants restaurants={restaurants} key={restaurants.id}
                ) />
            </div>
            <div>
                <img></img>
            </div>
        </div>
    );
};

export default Home;
