import React, { useState, useEffect } from "react";
import Restaurants from './Restaurants'
import Loading from './Loading'
import axios from 'axios'
import { TextField } from '@material-ui/core'

const Results = () => {
    const [restaurants, setRestaurants] = useState('');
    // const [cities, setCities] = useState([])
    // const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    // const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        const getResult = async () => {
            const get_restaurants = await axios.get("/restaurants.json");
            // const get_cities = await axios.get("/cities.json");
            // const get_category = await axios.get("/category.json");
                setRestaurants(get_restaurants.data.restaurants);
                // setCities(get_cities.data.cities);
                // setCategory(get_category.data.category);
        }
        setLoading(false)
        getResult();
    },[])
    console.log(restaurants);
    // console.log(cities);
    // console.log(category);
    
        return (
            <div>
                {loading && <Loading />}
				<TextField 
					variant='outlined' size='small'
					label='Search for Restaurant' 
					value={input} 
					onChange={(e) => setInput(e.target.value)} />
				
                {restaurants && 
                restaurants.filter((restaurant) => {
                    if(input === ''){
                        return restaurant
                    } else if(restaurant.name.toLowerCase().includes(input.toLowerCase())){
                        return restaurant
                    } else {
                        return console.log('No results found')
                    }
                })
                .map(restaurant => <Restaurants restaurant={restaurant}/>)}

            </div>
    )
}

export default Results;
