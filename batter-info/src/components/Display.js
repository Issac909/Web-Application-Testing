import React from 'react';

const Display = props => {
    return (
        <div className="display-container">
            <h2 className = 'home'>Strikes:{props.strikes}</h2>
            <h2 className = 'away'>Balls:{props.balls}</h2>
        </div>
    )
}

export default Display;
