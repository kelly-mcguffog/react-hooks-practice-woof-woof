import React from "react";

function DogBar({dogs, handleSummaryDog}){

    return(
        <div id="dog-bar"> 
        {dogs.map(dog => {return <span onClick={() => {handleSummaryDog(dog)}} key={dog.id}>{dog.name}</span>})}
        </div>
    )
}
export default DogBar;