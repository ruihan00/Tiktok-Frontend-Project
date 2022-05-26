import React, { useState } from "react";
import Key from "./Key";
import "./keyboard.css"
const keyboard_layout = [["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"], 
                            ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
                                ["z", "x", "c", "v", "b", "n", "m"]]
function Keyboard(props) {
    return (
        <div id="keyboard">
            {keyboard_layout.map((row) => <div>{row.map((key) => <Key name = {key} checkGuess = {props.checkGuess} playable = {props.playable}></Key>)}</div>)}
        </div>
    )
}

export default Keyboard;