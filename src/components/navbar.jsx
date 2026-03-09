import { NavLink } from "react-router-dom"

function Navbar() {

    return (
        <>
            <nav>
                <li> <NavLink to="/" className="nav-link" >Homepage</NavLink> </li>
                <li> <NavLink to="/settings" className="nav-link">Impostazioni</NavLink> </li>
            </nav>

        </>
    )
}

export default Navbar