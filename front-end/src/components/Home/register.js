import React, { useState } from "react";
import "./login.css";
import $ from "jquery";
function Register(props) {
    function handleClick() {
        $("#register-popup").css("visibility", "hidden")
    }

    const [form, setForm] = useState({
        "name":"",
        "username": "", 
        "password": ""
    })

    function handleChange(event) {
        let temp = form;
        temp[event.target.name] = event.target.value;
        setForm(temp);
        console.log(temp)
    }


    return <div className="popup" id="register-popup" >
        <div id="popup-content">
            <h2 id="popup-title">Register</h2>
            <div id="popup-close">
                <button id="popup-close-btn" onClick={handleClick}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <form className="popup-form">
            <div className="form-var">
                    <label className="form-name"> Name </label>
                    <input onChange={handleChange} name = "name" className="form-input"></input>
                </div>
                <div className="form-var">
                    <label className="form-name">Username </label>
                    <input onChange={handleChange} name = "username" className="form-input"></input>
                </div>
                <div className="form-var">
                    <label className="form-name">Password </label>
                    <input onChange={handleChange} name="password" className="form-input"></input>
                </div>
                <button type="submit" id="form-submit" onClick={() => {
                props.handleAuth();
                props.routeChange("/settings")
            }}>Register</button>
            </form>
        </div>

    </div>
}

export default Register;