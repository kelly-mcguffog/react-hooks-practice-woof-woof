import React from "react";

function DogSummary({dog, handleClickGoodBad}){
    return(
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={dog.image}></img>
                <span> {dog.name}</span>
                <button onClick={() => {handleClickGoodBad(dog.id, !dog.isGoodDog)}}> {dog.isGoodDog ? "Good Dog" : "Bad Dog"}</button>
            </div>
        </div>
    )
}

export default DogSummary;