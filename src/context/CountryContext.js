import { createContext, useContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {

    const [searchCity, setSearchCity] = useState('');
    const [cityDesc, setCityDesc] = useState({
        name: '',
        temp: 0,
    })
    const [submitVisible, setSubmitVisible] = useState(false);

    const data = {
        searchCity,
        setSearchCity,
        cityDesc,
        setCityDesc,
        submitVisible,
        setSubmitVisible
    }
    return <CountryContext.Provider value={data}> {children} </CountryContext.Provider>
}
export const useCountry = () => useContext(CountryContext);
