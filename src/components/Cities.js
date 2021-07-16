import axios from "axios";
import React, { useEffect, useState} from "react";
import { Button } from '@material-ui/core'

const Cities = () => {
	const [city, setCity] = useState(null)

	useEffect(() => {
        axios.get('https://yelp-backend-crossover.herokuapp.com/cities')
            .then((res) => {
                console.log(res.data);
                setCity(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

	return (
		<div style={{margin: '30px auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'left', flexDirection: 'column'}}>
			 {city && city.map((ele) => {
                return (
                    <div key={ele.id} style={{margin: '10px'}}>
                        <Button style={{fontSize: 22}} variant='contained' color='primary'  href={`/cities/${ele.city}`} >{ele.city}</Button>
                    </div>
                )
                })}
		</div>
	)
}

export default Cities
