import React, { useEffect, useState } from 'react'
import "./CSS/style.css"

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("kolkata");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b064858d3448f63a7a874b2ac0a758f3`;
            const res = await fetch(url);
            const resJson = await res.json();
            setCity(resJson.main);
            //console.log(resJson);
        }
        fetchApi();
    }, [search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value);
                        }}
                    />
                </div>
                {!city ? (<p className='errorMsg'>No Data Found</p>) : (
                    <div>
                        <div className='info'>
                            <h2 className='location'>

                                <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <h1 className='temp'>
                                {city.temp} °C
                            </h1>
                            <h3 className='tempmin_max'>Min : {city.temp_min}°C | Max : {city.temp_max}°C </h3>
                            <h3 className='tempmin_max'>Pressure : {city.pressure} Pa | Humidity : {city.humidity} </h3>

                        </div>
                        <div className='wave -one'></div>
                        <div className='wave -two'></div>
                        <div className='wave -three'></div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Tempapp