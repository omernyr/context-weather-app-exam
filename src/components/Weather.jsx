import { useCountry } from "../context/CountryContext";

const Weather = () => {

    const { cityDesc, setCityDesc, searchCity } = useCountry();

    const myApiKey = 'c638a0809d1431a1185a33c20bb50304';

    searchCity && fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${myApiKey}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            setCityDesc({
                name: data.name,
                temp: data.main.temp - 273.15
            })
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