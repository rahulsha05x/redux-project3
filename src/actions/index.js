import axios from 'axios';

const API_KEY = 'f99f4908c4e3c3aae89549e337e241bd';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export  function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
   
    const request = axios.get(url);
    
    return {
        type:FETCH_WEATHER,
        payload:request
    }
  
}