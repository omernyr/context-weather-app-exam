
const Header = ({ searchCity, setSearchCity }) => {


    return (
        <div className="Header">
            <form>
                <input
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    placeholder="Please a country name..." />

                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Header