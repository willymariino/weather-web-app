import Navbar from "./navbar"
import styles from "../styles/Header.module.css"

function Header() {
    return (
        <>
            <Navbar />
            <h1 className={styles.title}>Weather Dashboard</h1>



        </>
    )
}

export default Header