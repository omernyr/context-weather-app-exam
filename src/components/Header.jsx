import { useEffect } from "react";

const Header = ({ searchCity, setSearchCity }) => {

    const countrys = fetch("https://restcountries.com/v3.1/all").then((resp) => resp.json()).then((data) => console.log(data))

    useEffect(() => {
        console.log("Countries",countrys);
    },[countrys])
    
    return (
        <div className="Header">
            <form>
                <input
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="Please a country name..." />
                <select>
                    
                    <option value="turkey">turkey</option>
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