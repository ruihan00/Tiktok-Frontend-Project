import React from "react";
import "./Notification.css"
import $ from "jquery";
import { useNavigate } from "react-router-dom";


export function Gameover(props) {
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    return (
        <div className="notification">
            <div className="notification-content">
                <p id="game-over">GAME OVER</p>
                <div id="notification-btns">
                    <button id="home-btn" onClick={() => routeChange("/settings")}>Home</button>
                    <button id="play-again-btn" onClick={props.resetGame}>Play Again!</button>
                </div>
            </div>
        </div>
    )
}

export function Win(props) {
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    return (
        <div className="notification">
            <div className="notification-content">
                <p id="game-over">YOU WIN!</p>
                <div id="notification-btns">
                    <button id="home-btn" onClick={() => routeChange("/settings")}>Home</button>
                    <button id="play-again-btn" onClick={props.resetGame}>Play Again!</button>
                </div>
            </div>
        </div>
    )
}

export function Instructions(props) {
    function handleClick() {
        $("#instruction").css("visibility", "hidden");
    }
    return <div className="notification" id="instruction">
        <div className="notification-content">

            <h2 id="instruction-title">How to Play</h2>
            <div id="instruction-btns">
                <button id="instruction-btn" onClick={handleClick}><i class="fa-solid fa-xmark"></i></button>

            </div>
            <div id="instruction-content">
                <ol>
                    <li>Start by choosing a category you want to guess the word in.</li>
                    <li>A word with certain number of letters will be given to guess.</li>
                    <li>Use the letter to guess a letter you think is in the word(better to start with vowels).</li>
                    <li>Each time your chosen letter isn't in the word a part of a hanging man is formed.</li>
                    <li>Try to guess the word before the hanging man gets his whole body, if the hangman is formed then it is GAME OVER.</li>
                    <li>Most importantly, ENJOY!</li>
                </ol>
            </div>

        </div>

    </div>
}