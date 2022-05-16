import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Game() {
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    return (
        <div>
            <h1>This is Game Page</h1>
            <button onClick={() => routeChange("/")}>Home</button>
            <button onClick={() => routeChange("/settings")}>Settings</button>
        </div>)
}

export default Game