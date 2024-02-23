import React from "react";
import { useEffect, useState } from "react";

function App() {

    const [dogImageUrl, setDogImageUrl] = useState("")
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogImageUrl(data.message)
            setIsLoading(false)
        })
        .catch(error => console.error('Error fetching data:', error))
    }, [])



    return (
        <div>
            {isLoading ? <p>Loading...</p> : <img src={dogImageUrl} alt="A Random Dog" />}
        </div>
    )
}

export default App