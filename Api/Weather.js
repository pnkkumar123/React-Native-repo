import axios from 'axios';

import { apiKey } from '../Constants/Index';

const forecastEndpoint = params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const LocationEndpoint = params => `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`

const apiCall = async (endPoint)=>{
    const options = {
        method:"Get",
        url:endPoint
    }
    try{
         const response = await axios.request(options);
         return response.data;
    }catch(err){
console.log(err)
return null
    }
}

export const fetchWeatherForecast = params=>{
    
    return apiCall(forecastEndpoint(params));
};
export const fetchLocations = params=>{
    return apiCall(LocationEndpoint(params))
}