import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import  GoogleMap  from '../components/google_map';


class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const pressures = cityData.list.map(weather=>weather.main.pressure)
        const humidities = cityData.list.map(weather=>weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
        //console.log(temps);
        return (
            <tr key={cityData.city.id}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                    {name}
                </td>
                <td>
                    <Chart color="green" data={pressures} unit="K"/>
                </td>
                <td>
                    <Chart color="black" data={humidities} unit="hPa"/>
                </td>
                <td>
                    <Chart color="orange" data={temps} unit="%"/>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        weather:state.weather
    }
}
export default connect(mapStateToProps)(WeatherList);
