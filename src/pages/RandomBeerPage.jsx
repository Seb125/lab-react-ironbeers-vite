import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {

    const [randomBeer, setRadomBeer] = useState(null);


    useEffect(() => {
        const getRandom = async () => {
            const data = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
            console.log(data.data)
            setRadomBeer(data.data)
        }
        getRandom();
        
    }, [])

    if (!randomBeer) {
        return <div>...Loading</div>
    }

    return (
        <div>
        <img src={randomBeer.image_url} />
        <h1>{randomBeer.name}</h1>
        <h2>{randomBeer.tagline}</h2>
        <p>{[randomBeer.first_brewed, randomBeer.attenuation_level, randomBeer.contributed_by]}</p>
        <p>{randomBeer.description}</p>
        </div>

    )
}

export default RandomBeersPage;
