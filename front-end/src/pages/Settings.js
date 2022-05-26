import React, { useState } from "react";
import CategoryBtn from "../components/Settings/categoryBtn";
import "../components/Settings/settings.css"
function Settings(props) {
    //Routing function


    const categoryList = ["Occupations", "Countries", "Capitals", "Animals", "Movies", "Brands", "Random"]

    return (
        <div id="settings">
            <h1 id="settings-title">Choose a category</h1>
            {categoryList.map(cat => <CategoryBtn name = {cat} settings = {props.settings} setSettings = {props.setSettings}/>)}
        </div>
    )
}

export default Settings