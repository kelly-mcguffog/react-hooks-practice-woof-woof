import React, {useState, useEffect} from "react";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";

function DogContainer(){

    const [dogs, setDogs] = useState([])
    const [summaryDog, setSummaryDog] = useState({})

    function handleSummaryDog(dog){
        setSummaryDog(dog)
    }

    function handleClickGoodBad(id, isGoodDog){

        fetch(`http://localhost:3001/pups/${id}`,{
             method: "PATCH",
             headers:{
                "Content-Type": "application/json"
             },
             body: JSON.stringify({isGoodDog: isGoodDog})
             })
             .then(response => response.json())
             .then(data => setSummaryDog(data))
    }

    useEffect(() => {
        fetch('http://localhost:3001/pups')
            .then(response => response.json())
            .then(data => setDogs(data))
    }, [])

    return(
        <>
             
            <DogBar dogs={dogs} handleSummaryDog={handleSummaryDog}/>
   
            <DogSummary handleClickGoodBad={handleClickGoodBad} dog={summaryDog} />           
        </>
    )
}

export default DogContainer;