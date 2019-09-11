import React,{ useState, useEffect } from "react";
import axios from "axios";
import Asteroids from "./Asteroids"


export default function Galaxy () {

const [galaxies, setGalaxies] = useState([]);

useEffect(() => {
    axios.get (`https://api.nasa.gov/planetary/apod?api_key=JGYKNM6h2ZRuzKYCFlKHU3q8PovytMseIoTGK5h0`)
    .then(response => {
        const galaxies = response
        console.log(`new data`, galaxies)
        setGalaxies(galaxies);
    })
    .catch (error => {
        console.log(`no info`, error);
    })
}, []);
return (
    <div>
        {galaxies.map(item => {
            return (
                <Asteroids
                key={item.id}
                title = {item.date}
                url = {item.hdurl}
                />
            )
        })}


    </div>
)
}