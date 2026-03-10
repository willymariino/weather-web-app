import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Dashboard.module.css"
import getWeatherDescription from "../utility/weatherCodes";

function DashBoard() {

    // endpoint API open-meteo.com
    // coordinate Lodi: latitude=45.3128 longitude=9.4978
    const endPoint = "https://api.open-meteo.com/v1/forecast?latitude=45.3128&longitude=9.4978&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode";

    const [weather, setWeather] = useState(null)

    function getWeather() {

        axios.get(endPoint)
            .then(res => {
                console.log(res.data)
                setWeather(res.data)

            })
            .catch(err => {
                console.log(err)
            })


    }

    function update() { // // svuota lo stato per dare un riscontro visivo all'utente durante il caricamento della nuova fetch request
        setWeather(null)
        getWeather()
    }


    useEffect(getWeather, [])

    if (weather && weather.current) { // il render del componente avviene solo quando ci sono dati da mostrare

        return (
            <>
                <h1>Previsioni meteo di Lodi</h1>
                <p>  Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m} </p>
                <p>Umidità: {weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m} </p>
                <p>velocità del vento: {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
                <p>Cielo: {getWeatherDescription(weather.current.weathercode)}</p>
                <p> Data rilevazione: {weather.current.time}</p>

                <button onClick={update} className={styles.updatebtn}>
                    aggiorna
                </button>
            </>
        )

    }

    else {
        return (<>
            loading
        </>)
    }

}

export default DashBoard