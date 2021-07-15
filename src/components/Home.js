import React, { useState, useEffect } from "react";
import Search from "./Search";
import axios from 'axios'

const Home = () => {

    const [result, setResult] = React.useState(null)

    useEffect(() => {
        axios.get('/restaurants.json')
            .then((res) => {
                console.log(res.data.restaurants)
                setResult(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>
            <div>
                <Search  />
                <div >
                {result && result.map((item) => {
                    return (
                        <div key={item.id} style={{border: '2px solid red', margin: '10px'}}>
                            <h2>Name: {item.name}</h2>
                            <p>City: {item.city}</p>
                            <p>Address: {item.address}</p>
                            <p>Description: {item.description}</p>
                            <img src={item.image}  alt='Restaurant' width='100%'/>
                        </div>
                    )
                })}
                </div>
            </div>
            <div>
                <img></img>
            </div>
        </div>
    );
};

export default Home;
