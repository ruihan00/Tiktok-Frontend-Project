import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/home.css";
import Login from "../components/Home/login";
import Register from "../components/Home/register";
import $ from "jquery"
import Navbar from "../components/Nav/Navbar";
import { Instructions } from "../components/Notification/Notification";
function Home(props) {
    //Routing function
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    function handleLogin() {
        $("#login-popup").css("visibility", "visible")
    }

    function handleRegister() {
        $("#register-popup").css("visibility", "visible")
    }

    function handleAuth() {
        let temp = props.settings;
        temp["auth"] = true
        props.setSettings(temp)
        console.log(props.settings)
    }

    return (
        <div id="home">
            <Navbar auth={props.settings["auth"]} />
            <Instructions />
            <h1 id="game-title">HANGMAN</h1>
            <Login handleAuth={handleAuth} routeChange={routeChange} />
            <Register handleAuth={handleAuth} routeChange={routeChange} />
            <button type="submit" className="home-btn" id="play" onClick={handleLogin}>Login</button>
            <button className="home-btn" id="settings" onClick={handleRegister}>Register</button>
            <button className="home-btn" id="settings" onClick={() => {
                handleAuth();
                routeChange("/settings")
            }}>Continue as Guest</button>
        </div>
    )
}

export default Home