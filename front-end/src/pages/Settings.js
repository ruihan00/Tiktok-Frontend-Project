import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
    //Routing function
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    return (
        <div>
            <h1>This is Settings Page</h1>
            <button onClick={() => routeChange("/")}>Home</button>
            <button onClick={() => routeChange("/game")}>Game</button>
        </div>
    )
}

export default Settings