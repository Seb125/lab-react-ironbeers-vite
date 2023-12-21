
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function HomePage() {

    

    return(
        <div>
            <Link to="/beers">
            <img src="../src/assets/beers.png"/>
            <h2>All Beers</h2>
            </Link>

            <Link to="/random-beer">
            <img src="../src/assets/random-beer.png"/>
            <h2>Random Beer</h2>
            </Link>

            <Link to="/new-beer">
            <img src="../src/assets/new-beer.png"/>
            <h2>New Beer</h2>
            </Link>

        </div>
    )
}

export default HomePage;
