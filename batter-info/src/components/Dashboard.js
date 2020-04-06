import React from 'react';

const Dashboard = props => {
    return (
        <div className = 'buttons'>
            <button className = 'button' onClick={props.hit}>Hit</button>
            <button className = 'button' onClick = {props.strike}>Strike</button>
            <button className = 'button' onClick = {props.ball}>Ball</button>
            <button className = 'button' onClick = {props.foul}>Foul</button>
        </div>
    )
}

export default Dashboard;