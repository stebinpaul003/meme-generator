import React from "react";
import "../style.css"

export default function Header(){
    return(
        <header className="header">
            
            <img className="header-img" src={require("../Images/Troll Face.png")} alt="header-img"></img>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Course - Project 3</h4>
            
        </header>
    )
}