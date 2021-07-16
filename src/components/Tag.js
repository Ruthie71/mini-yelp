import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Typography, Card, Button } from '@material-ui/core'

const Tag = () => {
	const history = useHistory()
	const { name } = useParams()
	const [isTag, setIsTag] = useState(null)


	useEffect(() => {
		axios.get(`https://yelp-backend-crossover.herokuapp.com/tags/${name}`)
			.then((res) => {
				console.log(res.data);
				setIsTag(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [])

	return (
		<div>
			{isTag && isTag.map((tag) => {
				return (
					<Card elevation={10} style={{ width: 360, margin: '50px auto',  }} item xs={12} sm={6} align="center" key={tag.id} >
						<Button 
							style={{marginBottom: '16px', marginTop: '16px', fontSize: '24px'}}
							color="secondary"
							onClick={() =>
								history.push(`/restaurants/${tag.id}`)
							} variant="h6">{tag.name}</Button>
						<Typography style={{marginBottom: '10px'}} variant='body1'>{tag.city.toUpperCase()}</Typography>
						<Typography style={{marginBottom: '10px'}} variant="body1">{tag.tag}</Typography>
						<Typography style={{marginBottom: '10px'}} variant="body1">
							{tag.description}
						</Typography>
						{/* <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                            history.push(`/restaurants/${tag.id}`)
                        }
                    >
                        Show
                    </Button> */}
					</Card>
				)
			})}
		</div>
	)
}

export default Tag
