import Navbar from "./navbar"
import styles from "../styles/Header.module.css"

function Header() {
    return (
        <>
            <Navbar />
            <h2 className={styles.title}>Weather Dashboard</h2>
        </>
    )
}

export default Header