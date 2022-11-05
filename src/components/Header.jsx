import { useEffect } from "react";
import { useCountry } from "../context/CountryContext";

const Header = () => {

    const { countrys, setCountrys, searchCity, setSearchCity } = useCountry();

    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all").then((resp) => resp.json()).then((data) => setCountrys(data))

    }, [])

    console.log("Countries", countrys);

    return (
        <div className="Header">
            <form>
                {/* <input
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="Please a country name..." /> */}
                <select>
                    {countrys.map((country) => <option onChange={(e) => setSearchCity(e.target.value)} className="country-name" key={countrys.id} value={country.name.official}>{country.name.official}</option>)}
                </select>

                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Header