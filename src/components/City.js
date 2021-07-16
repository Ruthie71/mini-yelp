import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Typography, Grid, Button, makeStyles, Card } from '@material-ui/core'
import axios from 'axios'
import './Restaurant.css'
import { useParams, useHistory } from 'react-router-dom'

const useStyles = makeStyles({
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		width: 360, 
		margin: '50px auto',
		padding: '0 10px'
	}
})

const City = () => {
	const [cities, setCities] = useState(null)
	const [location, setLocation] = useState(null)
	const { name } = useParams()
	const classes = useStyles()
	const history = useHistory()


	useEffect(() => {
		axios.get(`https://yelp-backend-crossover.herokuapp.com/cities/${name}`)
			.then((res) => {
				console.log(res.data);
				setCities(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])


	const handleMap = (city) => {
		// setLocation(<MapContainer center={[city.lat, city.lon]} zoom={13} scrollWheelZoom={false} zoomControl={false} dragging={false} >
		// 	<TileLayer
		// 		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		// 		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		// 	/>
		// </MapContainer>)
		// console.log(city)
		// console.log(location)
		console.log(city[0].id)
	}

	return (
		<div className={classes.container}>
			{/* <div>
				{!location ? '' : location}
			</div> */}
			{cities && cities.map((city) => {
				return (
					<Card elevation={10} className={classes.container}  align="center" key={city.id}>
					<Button 
							style={{marginBottom: '16px',marginTop: '16px', fontSize: '24px'}}
							color="secondary"
							onClick={() =>
								history.push(`/restaurants/${city.id}`)
							} variant="h6">{city.name}</Button>
						<Typography style={{marginBottom: '10px'}} >{city.tag}</Typography>
						<Typography style={{marginBottom: '10px'}} >{city.description}</Typography>
						<br />
					</Card>
				)
			})}

			{/* <MapContainer
				center={[51.536388, -0.140556]}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
				<Marker position={[51.536388, -0.140556]}>
				{cities && cities.map((city) => {
					return (
						<div key={city.id}>
							<Popup>
								<Typography>{city.name}</Typography>
							</Popup>
						</div>
					)
					
				})}
				</Marker>
			</MapContainer> */}

		</div>
	)
}

export default City