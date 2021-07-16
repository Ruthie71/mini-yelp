import React, { useState, useEffect } from "react";
import "./Restaurant.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const useStyles = makeStyles({
    container: {
        marginTop: "-100px",
    },
});

const Restaurant = () => {
    const [name, setName] = useState(null);
    const { id } = useParams();
    const classes = useStyles();

    useEffect(() => {
        axios
            .get(
                `https://yelp-backend-crossover.herokuapp.com/restaurants/${id}`
            )
            .then((res) => {
                console.log(res.data);
                setName(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={classes.container}>
            {name && (
                <Grid item align="center">
                    <div>
                        <img
                            src={name.image_url}
                            alt={name.name}
                            width="100%"
                            height="400px"
                            style={{ paddingBottom: 40 }}
                        />
                        <Typography variant="h2">{name.name}</Typography>
                        <Typography variant="subtitle1">
                            Type of cuisine: {name.tag}
                        </Typography>
                        <Typography variant="h6">
                            {name.city.toUpperCase()}
                        </Typography>
                        <Typography variant="body1">
                            About: {name.description}
                        </Typography>
                    </div>
                    <div>
                        <MapContainer
                            center={[name.lat, name.lon]}
                            zoom={13}
                            scrollWheelZoom={false}
                            zoomControl={false}
                            dragging={false}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[name.lat, name.lon]}>
                                <Popup>
                                    <Typography variant="body2">
                                        {name.name}
                                    </Typography>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </Grid>
            )}
        </div>
    );
};

export default Restaurant;
