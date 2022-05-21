import React from "react";

function Blank(props) {
    return (
        <p className="blank">
            {props.value != "-" 
            ? <p className="blankLetter">{props.value}</p>
            : <p className="word-space">-</p>

            }
        </p>
    )
}

export default Blank;