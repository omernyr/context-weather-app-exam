import { useState } from "react"


const Weather = () => {

    const [cityName, setCityName] = useState("turkey");
    const myApiKey = 'c638a0809d1431a1185a33c20bb50304';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}`)
    .then((response) => response.json())
    .then((data) => console.log(data))

    return (
        <div className='Weather'>
            <div className='daily-weather-box'>
                <span className='weather-days'>Wed</span>
                <span className='weather-icon'>☔️</span>
                <span className='weather-deg'>78° 67°</span>
            </div>
            
        </div>
    )
}

export default Weather