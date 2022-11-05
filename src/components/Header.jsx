import { useCountry } from "../context/CountryContext";

const Header = () => {

    const { searchCity, setSearchCity, setSubmitVisible } = useCountry();

    return (
        <div className="Header">

            <input
                onMouseEnter={() => setSubmitVisible(false)}
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                placeholder="Please a country name..." />

            <button
                onClick={() => setSubmitVisible(true)}>
                Submit
            </button>

        </div>
    )
}

export default Header