import React, { useState, useEffect } from 'react'; // CHANGED THIS
import Keyboard from "../components/Game/Keyboard/Keyboard";
import BlanksArea from "../components/Game/BlanksArea";
import "../components/Game/game.css"
import {Gameover, Win, Instructions} from "../components/Notification/Notification"
import $ from "jquery";
import Navbar from '../components/Nav/Navbar';
import {wordCollection} from '../components/words/overallWords';
import {hangman_img} from "../components/Kermit hangman/hangman_img"
function Game(props) {
    const totalLives = 9;

    function resetGame() {
        setguess(Array.from(word, x => x != " " ? "_": "-"))
        setlives(totalLives)
        setplayable(true);
        $(".keyboard-key").toggleClass("used")
        $(".keyboard-key").prop("disabled", false)
        setWord(generateWord(props.settings["category"]))
    }

    function handleKeyPress(event) {
        $("#" + event.key.toLowerCase()).trigger("click")
    }
    const [word, setWord] = useState(generateWord(props.settings['category']))
    

    function generateWord(category) {
        if (category == "Random") {
            const possible = ["Occupations", "Countries", "Capitals", "Animals", "Movies", "Brands"]
            category = possible[Math.floor(Math.random() * possible.length)]

        }
        const data = wordCollection[category]
        const rand = Math.floor(Math.random() * data.length)
        const word = data[rand].toLowerCase()
        if (word.length > 12) {
            return generateWord(category)
        }
        return word
    }

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
            {!playable && lives <= 0 ? <Gameover answer = {word} resetGame = {resetGame}/>: "" }
            {!playable && lives > 0 ? <Win resetGame = {resetGame}/> : ""}
            <Instructions/>
            <h1 id = "title">{props.settings["category"]}</h1>
            <div className='container'>
            <Navbar auth ={props.settings["auth"]}/>
            <hr/>
            <div id='hangman-img-container'>
                <img id='hangman-img' src={hangman_img[lives]}/>

            </div>
            <BlanksArea word={guess} />
            <Keyboard checkGuess={checkGuess} playable = {playable}/>
            </div>
        </div>)
}

export default Game