import React, { useState, useEffect } from "react";
import axios from "axios";
import Asteroids from "./Asteroids";
import { Container, Row } from "reactstrap";
import styled from "styled-components";

const nasaKey = 'SUMQETBpXGEjrw20RdOmp6e2R0CqSbtCvMaLeQsw';

export default function Galaxy() {
  const [galaxies, setGalaxies] = useState([]);


  const HeadLine = styled.h1`
  text-shadow: 1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue;
  font-size: 4rem;

  `

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
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
    <Container>
      <Row>
        <HeadLine>And todays image is: </HeadLine>
      <Asteroids
        key={galaxies.index}
        date={galaxies.date}
        img={galaxies.hdurl}
        description={galaxies.explanation}
        copyright={galaxies.copyright}
        title={galaxies.title}
      />
      </Row>
    </Container>
  )
}

