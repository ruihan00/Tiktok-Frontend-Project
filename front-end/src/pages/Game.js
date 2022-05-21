import React, { useState, useEffect } from 'react'; // CHANGED THIS
import { useNavigate } from "react-router-dom";
import Keyboard from "../components/Keyboard/Keyboard";
import BlanksArea from "../components/Game/BlanksArea";
import Notification from '../components/Notification/Notification';
import $ from "jquery";

function Game() {
    const totalLives = 5;
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }

    function resetGame() {
        setguess(Array.from(word, x => x != " " ? "_": "-"))
        setlives(totalLives)
        setplayable(true);
        $(".keyboard-key").toggleClass("used")
        $(".keyboard-key").prop("disabled", false)
    }

    function handleKeyPress(event) {
        $("#" + event.key.toLowerCase()).trigger("click")
    }

    const word = "santa monica";
    const wordList = word.split("");
    const [lives, setlives] = useState(totalLives);
    const [guess, setguess] = useState(Array.from(word, x => x != " " ? "_": "-"))
    const [playable, setplayable] = useState(true);



    // let wrong = 0; // Put this in

    function checkGuess(letterGuess) {
        if (word.includes(letterGuess)) { // Edited
            let temp = guess.splice(0, guess.length);
            for (let i = 0; i < wordList.length; i++) {
                if (letterGuess == wordList[i]) {
                    temp[i] = letterGuess
                }
            }
            setguess(temp)
            
        }
        //I AM EDITING THIS PART 
        else {
            setlives(lives - 1);
            if (lives == 0) {
                setplayable(false);
                $(".keyboard-key").prop("disabled", true)
            }
        
        }   
    }

    document.addEventListener("keypress", handleKeyPress);
    return (
        
        <div>
            {playable ? "" : <Notification resetGame = {resetGame}/>}
            <h1 id = "title">HANGMAN</h1>
            <div className='container'>
            <div id='nav'>
                <button className='nav-btn' onClick={() => routeChange("/")}><i class="fa-solid fa-house"></i></button>
                <button className='nav-btn' onClick={() => routeChange("/settings")}><i class="fa-solid fa-gear"></i></button>
                <button className='nav-btn'> <i class="fa-solid fa-question"></i> </button>
            </div>
            <hr/>

            <BlanksArea word={guess} />
            <Keyboard checkGuess={checkGuess} playable = {playable}/>
            </div>

        </div>)
}

export default Game