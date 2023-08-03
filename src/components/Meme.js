import React from "react";
import "../style.css"
import memeData from "../memeData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/2d3al6.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function handleChange(event) {
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [event.target.name]:event.target.value
            }
        })

    }


    function randomMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
        
    }

    return (
        <main>
            <div className="form">
                
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top-Text"
                    className="form-input"
                    value={meme.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom-Text"
                    className="form-input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />

                <button
                    className="form-button"
                    onClick={randomMeme}>Get a new meme image 🖼
                </button>
            </div>
            
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
