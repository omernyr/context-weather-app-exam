import { useCountry } from "../context/CountryContext";
import axios from "axios";
import { useEffect } from "react";
const Weather = () => {

    const { cityDesc, setCityDesc, searchCity, submitVisible, dailyForecast, setDailyForecast } = useCountry();

    const myApiKey2 = 'cd103e9bb5bb41dc840b6d7c45491b8d';

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&key=${myApiKey2}`

    submitVisible && axios.get(`${url}`)
        .then((item) => {
            item.data.data.map((day) =>
                console.log(day)
                // setCityDesc([...cityDesc, { name: searchCity, datetime: day.datetime, temp: day.temp, icon: day.weather.icon }])
            )
            // setDailyForecast([...dailyForecast, item.data])
        })

    // useEffect(() => {
    //     console.log(cityDesc);
    // }, [cityDesc])

    return (
        <div className='Weather'>
            <div className='daily-weather-box'>

                <span className='weather-days'>{cityDesc.name}</span>
                <span className='weather-icon'>☔️</span>
                <span className='weather-deg'>{cityDesc.temp}°</span>
            </div>

        </div>
    )
}

export default Weather