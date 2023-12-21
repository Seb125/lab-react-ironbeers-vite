import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {

    const [details, setDetails] = useState(null);

    const id = useParams("beerId");
    console.log(id)

    useEffect(() => {
        const getDetails = async () => {
            const data = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id.beerId}`);
            console.log(data.data)
            setDetails(data.data)
        }
        getDetails();
        
    }, [])

    if (!details) {
        return <div>...Loading</div>
    }

    return (
        <div>
        <img src={details.image_url} />
        <h1>{details.name}</h1>
        <h2>{details.tagline}</h2>
        <p>{[details.first_brewed, details.attenuation_level, details.contributed_by]}</p>
        <p>{details.description}</p>
        </div>

    )

}

export default BeerDetailsPage;
