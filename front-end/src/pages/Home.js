import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "../components/home.css";

function Home() {
    //Routing function
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    
    return (
        <div>
            <h1>Hangman – Home Page</h1>
            <button id="play" onClick={() => routeChange("/game")}>Play</button>
            <button id="settings" onClick={() => routeChange("/settings")}>Settings</button>
        </div>
    )
}

export default Home