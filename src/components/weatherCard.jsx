import getWeatherDescription from "../utility/weatherCodes"
import styles from "../styles/WeatherCard.module.css"

function WeatherCard({ weather }) {

    const date = new Date(weather.current.time)

    const formattedDate = date.toLocaleDateString("it-IT", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }) +
        " - " + date.toLocaleTimeString("it-IT", {
            hour: "2-digit",
            minute: "2-digit"
        })


    return (
        <>
            <div className={styles.card}>

                <section className={styles.cardSection}>
                    <div className={styles.cardText}>{getWeatherDescription(weather.current.weathercode)}</div>
                    <div className={styles.cardText}>Temperatura: <strong>{weather.current.temperature_2m} {weather.current_units.temperature_2m} </strong> </div>
                </section>

                <section className={styles.cardSection}>
                    <div className={styles.cardText}>Umidità: <strong>{weather.current.relative_humidity_2m} {weather.current_units.relative_humidity_2m} </strong></div>
                    <div className={styles.cardText}>Velocità del vento: <strong> {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</strong></div>
                </section >

                <div> aggiornato: {formattedDate}</div>
            </div>
        </>
    )
}

export default WeatherCard