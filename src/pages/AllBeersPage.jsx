import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function AllBeersPage() {

    const [beers, setBeers] = useState([]);
    const [query, setQuery] = useState("");

    const handleQuery = (query) => {
        console.log(query)
        setQuery(query);
        const getQueryBeers = async () => {
            const queryBeers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
            setBeers(queryBeers.data);
        }
        getQueryBeers();
        
    }

    useEffect(() => {
        const getBeers  = async () => {
            const myBeers = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
            setBeers(myBeers.data)
            console.log(myBeers.data[0].contributed_by)
        }

        getBeers();
        console.log(beers)
    }, [])

    if (!beers) {
        return <div>...Loading</div>
    }

    return (

        <div>
        <label>Search beers</label>
        <input type="text" value={query} onChange={(event) => handleQuery(event.target.value)}/>
            {beers.map(element => {
                return (
                    <div key={element._id}>
                    <Link to={`/beers/${element._id}`}>
                    <h2>{element.name}</h2>
                    <img src={element.image_url}/>
                    </Link>
                    <h3>{element.tagline}</h3>
                    <p>Created by {element.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBeersPage;
