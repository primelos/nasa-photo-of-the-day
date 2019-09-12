import React, { useState, useEffect } from "react";
import axios from "axios";
import Asteroids from "./Asteroids";

export default function Galaxy() {
  const [galaxies, setGalaxies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=SUMQETBpXGEjrw20RdOmp6e2R0CqSbtCvMaLeQsw`)
      .then(response => {
        const galaxies = response.data;
        console.log(`new data`, galaxies);
        setGalaxies(galaxies);
        
      })
      .catch(error => {
        console.log(`no info`, error);
      });
  }, []);
  return (
    <div>
        <h1>Nasa Explorer</h1>
      <Asteroids
        key={galaxies.index}
        date={galaxies.date}
        img={galaxies.hdurl}
        description={galaxies.explanation}
        copyright={galaxies.copyright}
      />
      
    </div>
  )
}

