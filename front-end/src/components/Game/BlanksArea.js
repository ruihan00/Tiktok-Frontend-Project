import React from "react";
import Blank from "./Blank";
function BlanksArea(props) {
    return (
        <div id="blanks-area">
            {props.word.map((letter) => <Blank value = {letter}/>)}
        </div>
    )
}

export default BlanksArea;