import '../App.css'
import Header from './Header'
import Weather from './Weather'
import { useState } from 'react';
const Container = () => {

    const [searchCity, setSearchCity] = useState('');

    return (
        <div className='Box'>
            <Header searchCity={searchCity} setSearchCity={setSearchCity} />
            <Weather searchCity={searchCity} setSearchCity={setSearchCity} />
        </div>
    )
}

export default Container