import getWeatherDescription from "../utility/weatherCodes"

function WeatherCard({ weather }) {

    return (
        <>
            <p>  Temperature: {weather.current.temperature_2m} {weather.current_units.temperature_2m} </p>
            <p>Umidità: {weather.current.relative_humidity_2m}{weather.current_units.relative_humidity_2m} </p>
            <p>velocità del vento: {weather.current.wind_speed_10m} {weather.current_units.wind_speed_10m}</p>
            <p>Cielo: {getWeatherDescription(weather.current.weathercode)}</p>
            <p> Data rilevazione: {weather.current.time}</p>

        </>
    )
}

export default WeatherCard