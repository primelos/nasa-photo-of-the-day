
import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Col
} from 'reactstrap'

import styled from "styled-components";

const SpaceImg = styled.img`
    width: 800px;
    height: 515px;
`
const Para= styled.p`
    
    font-size: 2rem;
    font-family: fantasy;
    background-color: red;
    background-image: radial-gradient(red, #abb5da, #010313);
`
const Title = styled.p`
    font-size: 2rem;
    color: #161688;
    font-weight: 100;
    text-shadow: lavender;
    text-shadow: -2px -2px 1px red, 0 0 0em blue, 0 0 0.2em blue;
`
const Day = styled.p`
    text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
    color: white;
`
// const foot = styled.div`
//     display:flex;
//     color: white;
// `

const Asteroids = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <Title>{props.title}</Title>
          <Day>Date: {props.date}</Day>
        </CardBody>
        <SpaceImg className width="100%" src= {props.img}  alt="space image" />
        <CardBody>
          <Para>Read: {props.description}</Para>
          <CardSubtitle>Photographer: {props.copyright}</CardSubtitle>
        <div className = 'footers'>
        
            <CardLink className="link" href="#https://api.nasa.gov/index.html">Nasa API</CardLink>
            <CardLink className="link" href="#https://github.com/primelos">My Git</CardLink>
         
        </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Asteroids;