import React from "react";

export default function Notification(props) {
    return (
        <div className="notification">
            <div className="notification-content">
                <p id="game-over">Game Over</p>
                <div id = "notification-btns">
                    <button id = "home-btn">Home</button>
                    <button id ="play-again-btn" onClick={props.resetGame}>Play Again!</button>
                </div>
            </div>


            
        </div>
    )
}