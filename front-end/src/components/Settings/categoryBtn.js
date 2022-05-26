import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryBtn(props) {
    let navigate = useNavigate();
    function routeChange(path) {
        console.log(path)
        navigate(path);
    }
    function handleClick(value) {
        let setting = props.settings;
        setting["category"] = value
        props.setSettings(setting);
        routeChange("/game")
    }

    return (
        <div className="category">
            <button onClick={() => handleClick(props.name)} className="category-btn">
                {props.name}
            </button>
        </div>

    )
}

export default CategoryBtn;