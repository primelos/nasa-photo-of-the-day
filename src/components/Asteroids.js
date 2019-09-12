import React from "react";

const Asteroids = props => {
console.log(props)
    return(
        <div className="pic1-info" key={props.index}>
            <p>Date:{props.date} </p>
            <img src = {props.img}  alt="space image"/>
            <p>Read: {props.description}</p>
            <p>Professor: {props.copyright}</p>
        </div>
    )
}
export default Asteroids;
