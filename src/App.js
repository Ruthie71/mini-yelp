import React, { useEffect, useState } from "react";
import "./App.css";
import Results from "./components/Results";
//import Search from "./components/Search";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Search from "./components/Search";
import Tags from "./components/Tags";
import Cities from "./components/Cities";
import Restaurant from "./components/Restaurant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
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
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/restaurants" component={Results} />
                <Route exact path="/restaurants/:id" component={Restaurant} />
                <Route exact path="/tags" component={Tags} />
                {/* <Route exact path='/tags/:name' component={Tag} /> */}
                <Route exact path="/cities" component={Cities} />
            </Switch>
            <Footer />
        </Router>
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
