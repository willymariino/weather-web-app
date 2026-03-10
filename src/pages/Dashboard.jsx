import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Dashboard.module.css"

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

    const weatherDescriptions = {
        0: "Cielo sereno",
        1: "Principalmente sereno",
        2: "Parzialmente nuvoloso",
        3: "Coperto",
        45: "Nebbia leggera",
        48: "Nebbia ghiacciata",
        51: "Pioviggine leggera",
        53: "Pioviggine moderata",
        55: "Pioviggine intensa",
        56: "Pioviggine ghiacciata leggera",
        57: "Pioviggine ghiacciata intensa",
        61: "Pioggia leggera",
        63: "Pioggia moderata",
        65: "Pioggia intensa",
        66: "Pioggia ghiacciata leggera",
        67: "Pioggia ghiacciata intensa",
        71: "Neve leggera",
        73: "Neve moderata",
        75: "Neve intensa",
        77: "Granelli di neve",
        80: "Rovesci leggeri di pioggia",
        81: "Rovesci moderati di pioggia",
        82: "Rovesci violenti di pioggia",
        85: "Rovesci leggeri di neve",
        86: "Rovesci intensi di neve",
        95: "Temporale leggero/moderato",
        96: "Temporale con grandine leggera",
        99: "Temporale con grandine intensa"
    }

    function getWeatherDescription(code) {
        return weatherDescriptions[code] || "Non disponibile";
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