import { NavLink } from "react-router-dom"
import styles from "../styles/Navbar.module.css"

function Navbar() {

    return (

        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li> <NavLink to="/" className={styles.navLink} >Homepage</NavLink> </li>
                <li> <NavLink to="/settings" className={styles.navLink}>Impostazioni</NavLink> </li>
            </ul>
        </nav >


    )
}

export default Navbar