import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard/Keyboard";
import BlanksArea from "../components/Game/BlanksArea";
function Game() {
    const word = "singapore"
    const wordList = word.split("")
    const userwordList = []

    for (let i = 0; i < wordList.length; i++) {
        userwordList[i] = " "
    }
    const [guess, setguess] = useState(userwordList)

    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }

    function checkGuess(letterGuess) {
        let temp = guess.splice(0, guess.length);
        for (let i = 0; i < wordList.length; i++) {
            if (letterGuess == wordList[i]) {
                temp[i] = letterGuess
                
            }
        }
        setguess(temp)

    }
    return (
        <div>
            <h1>This is Game Page</h1>
            <button onClick={() => routeChange("/")}>Home</button>
            <button onClick={() => routeChange("/settings")}>Settings</button>
            <BlanksArea word={guess} />
            <Keyboard checkGuess={checkGuess} />
        </div>)
}

export default Game