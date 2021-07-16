import React, { useState } from 'react'
import axios from 'axios'

const Restaurant = ({ restaurant }) => {
	const [name, setName] = useState(null);
	
	axios.get(`/restaurants/${restaurant.id}`)
		.then((res) => {
			console.log(res.data)
			setName(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
	
	return (
		<div>
			<h1>{name}</h1>
		</div>
	)
}

export default Restaurant
