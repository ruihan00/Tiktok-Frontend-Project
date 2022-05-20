import React, {useState} from "react";
import $ from "jquery"
function Key(props) {
    const handleClick = (event) => {
        $("#" + props.name).prop("disabled", true)
        props.checkGuess(props.name)
        
    }

    return (
        <button id = {props.name}  onClick={handleClick} className="keyboard-key">
            {props.name}
        </button>
    )
}

export default Key;