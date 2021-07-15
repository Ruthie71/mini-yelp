import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Results from "./components/Results";
//import Search from "./components/Search";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    // useEffect(() => {
    //     axios
    //         .get("/restaurants.json")
    //         .then((response) => {
    //             console.log(response.data);
    //             setItems(response.data);
    //             //setLoading(false);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             //   setError(error);
    //             //   setLoading(false);
    //             //   setTimeout(() => setError(null), 3000);
    //         });
    // }, []);

    //   if (loading) return <Loading />;
    //   if (error) return <Error error={error} />;

    return (
        <>
            {loading && <Loading />}
            {error && <Error />}
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/results" component={Results} />
                </Switch>
            </Router>
        </>
    );
};

// Create Route for restaurants

// Main page
// Nav
// Search
// Results
// imagery
// footer

// Restaurants page
// nav
// Restaurant info:

// name
// location
// Address - Str, number, city, lon/lat
// image
// category
// description
// leaflet Map

// Implement a search bar to retrieve the restaurants by
// Tag
// City
// A detailed page for each restaurant with a map on it
// A page with all the restaurants and filters on it
// (Optional) A fake login page

// Endpoints

// GET (POST) /restaurants
// Get all the restaurants

// [
// {
//         id: Int,
// name: string,
//         tag: [strings],
//         coords: {lat: float,lon: float}
//         picture: string
//         city: string
//     },
// {
// ….
// }
// ]

// GET /restaurants/{id}
// Get restaurant by id

// {
//         id: Int,
// name: string,
//         tag: [strings],
//         coords: {lat: float,lon: float}
//         picture: string
//         city: string
//     }

// GET POST /tags
// Get all tags

// GET /tags/indian
// Get all restaurant with tag “indian”

export default App;
