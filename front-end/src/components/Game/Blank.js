import React from "react";

function Blank(props) {
    return (
        <p className="blank">
            <p className="blankLetter">{props.value}</p>
        </p>
    )
}

export default Blank;