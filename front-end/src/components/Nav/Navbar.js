import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import $ from "jquery";
function Navbar(props) {
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    function handleInstruction() {
        $("#instruction").css("visibility", "visible");
    }
    return <div id='nav'>
        {props.auth ? <button className='nav-btn' onClick={() => routeChange("/settings")}><i class="fa-solid fa-house"></i></button> : ""}
        
        <button className='nav-btn' onClick={handleInstruction}> <i class="fa-solid fa-question"></i> </button>
    </div>
}

export default Navbar;