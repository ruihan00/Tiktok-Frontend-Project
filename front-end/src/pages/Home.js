import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Home() {
    //Routing function
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    
    return (
        <div>
            <h1>This is Home page</h1>
            <button onClick={() => routeChange("/settings")}>Settings</button>
            <button onClick={() => routeChange("/game")}>Game</button>
        </div>
    )
}

export default Home