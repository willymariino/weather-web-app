import getWeatherDescription from "../utility/weatherCodes"

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
            <p>  Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m} </p>
            <p>Umidità: {weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m} </p>
            <p>velocità del vento: {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
            <p>Cielo: {getWeatherDescription(weather.current.weathercode)}</p>
            <p> Data rilevazione: {formattedDate}</p>

        </>
    )
}

export default WeatherCard