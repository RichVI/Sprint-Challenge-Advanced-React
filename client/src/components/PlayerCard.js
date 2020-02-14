import React from 'react';
import './PlayerCard.css';

const PlayerCard = props => {
console.log("PlayerCard props", props)

    return(
        <div className="PlayerCard">
            <div className="card">
                <p>Player Name: {props.name}</p>
                <p>Country: {props.country}</p>
                <p>Search: {props.searches}</p>
            </div>
        </div>
    )
}

export { PlayerCard }