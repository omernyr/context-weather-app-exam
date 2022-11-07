import { useCountry } from "../context/CountryContext";
import axios from "axios";
import { useEffect } from "react";
const Weather = () => {

    const { cityDesc, setCityDesc, searchCity, submitVisible, dailyForecast, setDailyForecast } = useCountry();

    const myApiKey1 = 'ba857cd3147143bcb90112148220511';
    const myApiKey2 = 'c638a0809d1431a1185a33c20bb50304';

    const url1 = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&key=${myApiKey1}`
    const url2 = `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=daily&appid=${myApiKey2}`

    submitVisible && fetch(`${url1}`)
        .then((resp) => resp.json())
        .then((item) => console.log(item))

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