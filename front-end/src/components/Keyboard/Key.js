import React from "react";

function Key(props) {
    const handleClick = (event) => {
        event.target.classList.add("used")
        props.checkGuess(props.name)
        
    }
    return (
        <button onClick={handleClick} className="keyboard-key">
            {props.name}
        </button>
    )
}

export default Key;