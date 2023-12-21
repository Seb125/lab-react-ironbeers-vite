import { Link } from "react-router-dom";



function Navbar() {

    return (
        <nav style={{backgroundColor: "blue"}}>
            <Link to="/">
                <img src="../src/assets/home-icon.png"></img>
            </Link>
        </nav>
    )
}

export default Navbar;
