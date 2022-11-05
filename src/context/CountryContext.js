import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState('');
    const [cityName, setCityName] = useState("turkey");
    const [cityDesc, setCityDesc] = useState({
        name: '',
        temp: 0,
    })
    const [countrys, setCountrys] = useState([]);

    const data = {
        searchCity,
        setSearchCity,
        cityName,
        setCityName,
        cityDesc,
        setCityDesc,
        countrys,
        setCountrys
    }
    return <CountryContext.Provider value={data}> {children} </CountryContext.Provider>
}
export const useCountry = () => useContext(CountryContext);
