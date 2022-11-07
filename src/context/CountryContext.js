import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {

    const [dailyForecast, setDailyForecast] = useState([]);
    const [searchCity, setSearchCity] = useState('');
    const [cityDesc, setCityDesc] = useState([
        {
            name: 'van',
            datetime: '2022-09-19',
            temp: '23.2',
            icon: 's02d',
        },
        {
            name: 'adana',
            datetime: '2022-03-19',
            temp: '12.1',
            icon: 's03b',
        }
    ])

    const [submitVisible, setSubmitVisible] = useState(false);

    const data = {
        searchCity,
        setSearchCity,
        cityDesc,
        setCityDesc,
        submitVisible,
        setSubmitVisible,
        dailyForecast,
        setDailyForecast
    }
    return <CountryContext.Provider value={data}> {children} </CountryContext.Provider>
}
export const useCountry = () => useContext(CountryContext);
