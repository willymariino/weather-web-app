import { NavLink } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

function Navbar() {

    return (

        <nav className={styles.navbar}>

            <NavLink to="/" className={styles.navLink} >🏠</NavLink>
            <h1>Meteo di Lodi</h1>
            <NavLink to="/settings" className={styles.navLink}>🛠️</NavLink>

        </nav >


    )
}

export default Navbar