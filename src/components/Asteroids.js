import React from "react"

const Asteroids = props => {

    return(
        <div className="pic1-info" key={props.id}>
            <nav>{props.date} </nav>
            <div> {props.hdurl}</div>
        </div>
    )
}
export default Asteroids;
