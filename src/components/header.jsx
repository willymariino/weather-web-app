import Navbar from "./navbar"
import styles from "../styles/Header.module.css"

function Header() {
    return (
        <>
            <h1 className={styles.title}>Weather Dashboard</h1>

            <Navbar />

        </>
    )
}

export default Header