import axios from "axios";
import { useState } from "react";

function AddBeerPage() {

    const [name, setName] = useState("");
    const  [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");

    const submitForm = (event) => {
        event.preventDefault();
        const body = {name: name, tagline: tagline, description: description}
        const sendData = async () => {
            const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            console.log(response)
        }
        sendData();
        setName("");
        setTagline("");
        setDescription("");
    }

    return (
        <div>
        <form onSubmit={(event) => submitForm(event)}>

            <label htmlFor="name">
                Name
            </label>
            <input name="name" type="text" value={name} onChange={(event) => setName(event.target.value)}/> 

            <label htmlFor="tagline">
                tagline
            </label>
            <input name="tagline" type="text"  value={tagline} onChange={(event) => setTagline(event.target.value)}/> 

            <label htmlFor="description">
                description
            </label>
            <input name="description" type="text" value={description} onChange={(event) => setDescription(event.target.value)}/> 

            <button type="submit">Submit form</button>
            
        </form>
        </div>
    )
}

export default AddBeerPage;
