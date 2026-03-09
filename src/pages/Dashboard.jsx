import { useEffect, useState } from "react";
import axios from "axios";

function DashBoard() {

    // endpoint API open-meteo.com
    // coordinate Lodi: latitude=45.3128 longitude=9.4978
    const endPoint = "https://api.open-meteo.com/v1/forecast?latitude=45.3128&longitude=9.4978&current=temperature_2m";

    function getWeather() {

        axios.get(endPoint)
            .then(res => {
                console.log(res.data)

            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(getWeather, [])

    return (
        <>

            <h1>Previsioni meteo di Lodi</h1>

        </>
    )
}

export default DashBoard