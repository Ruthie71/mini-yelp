import axios from "axios";
import React, { useEffect, useState} from "react";
import { Button } from '@material-ui/core'


const Tags = () => {
    const [tags, setTags] = useState(null)

    useEffect(() => {
        axios.get('https://yelp-backend-crossover.herokuapp.com/tags')
            .then((res) => {
                console.log(res.data);
                setTags(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div style={{margin: '30px auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'left', flexDirection: 'column'}}>
            {tags && tags.map((tag) => {
                return (
                    <div key={tag.id} style={{ margin: '10px 10px'}}>
                        <Button style={{fontSize: 22}} variant='contained' color='secondary' href={`/tags/${tag.tag}`} >{tag.tag}</Button>
                    </div>
                )
                })}
        </div>
    );
};

export default Tags;
