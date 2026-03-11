import styles from "../styles/WeatherCard.module.css"

function LoadingCard() {


    return (
        <>
            <div className={styles.card}>

                <section className={styles.cardSection}>
                    <h2>loading...</h2>
                </section>

            </div>
        </>
    )
}

export default LoadingCard