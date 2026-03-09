import { useEffect, useState } from "react";
import axios from "axios";

function DashBoard() {

    // endpoint API open-meteo.com
    // coordinate Lodi: latitude=45.3128 longitude=9.4978
    const endPoint = "https://api.open-meteo.com/v1/forecast?latitude=45.3128&longitude=9.4978&current=temperature_2m";

    const [weather, setWeather] = useState([])

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

    function update() {
        setWeather([])
        getWeather()
    }

    useEffect(getWeather, [])

    if (weather && weather.current) { // il render del componente avviene solo quando ci sono dati da mostrare

        return (
            <>
                <h1>Previsioni meteo di Lodi</h1>
                <p>  Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m} </p>
                <p> Data rilevazione: {weather.current.time}</p>

                <button onClick={update}>
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