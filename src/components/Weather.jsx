import React from "react";
import { useCountry } from "../context/CountryContext";

const Weather = () => {

    const { cityDesc, setCityDesc, searchCity, submitVisible } = useCountry();

    const myApiKey2 = 'cd103e9bb5bb41dc840b6d7c45491b8d';

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchCity}&key=${myApiKey2}`

    submitVisible && fetch(`${url}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            // setCityDesc({
            //     name: data.name,
            //     temp: data.main.temp - 273.15
            // })
        })

    return (

        <div className='Weather'>
            <div className='daily-weather-box'>
                <span className='weather-days'>{cityDesc.name}</span>
                <span className='weather-icon'>☔️</span>
                <span className='weather-deg'>{cityDesc.temp.toFixed(0)}°</span>
            </div>

        </div>
    )
}

export default Weather