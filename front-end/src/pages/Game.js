import React, { useState, useEffect } from 'react'; // CHANGED THIS
import Keyboard from "../components/Game/Keyboard/Keyboard";
import BlanksArea from "../components/Game/BlanksArea";
import {Gameover, Win, Instructions} from "../components/Notification/Notification"
import $ from "jquery";
import Navbar from '../components/Nav/Navbar';
function Game(props) {
    const totalLives = 5;

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
        console.log(lives)
        if (word.includes(letterGuess)) { // Edited
            let temp = guess.splice(0, guess.length);
            for (let i = 0; i < wordList.length; i++) {
                if (letterGuess == wordList[i]) {
                    temp[i] = letterGuess
                }
            }
            setguess(temp)
            if (!temp.includes("_")) {
                setplayable(false)
            }
        }
        //I AM EDITING THIS PART 
        else {
            const newLives = lives - 1;
            setlives(newLives);
            if (newLives == 0) {
                setplayable(false);
                $(".keyboard-key").prop("disabled", true)
            }
        
        }   
    }

    document.addEventListener("keypress", handleKeyPress);
    return (
        <div>
            {!playable && lives <= 0 ? <Gameover resetGame = {resetGame}/>: "" }
            {!playable && lives > 0 ? <Win resetGame = {resetGame}/> : ""}
            <Instructions/>
            <h1 id = "title">{props.settings["category"]}</h1>
            <div className='container'>
            <Navbar auth ={props.settings["auth"]}/>
            <hr/>
            <BlanksArea word={guess} />
            <Keyboard checkGuess={checkGuess} playable = {playable}/>
            </div>
        </div>)
}

export default Game