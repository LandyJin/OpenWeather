import React, { useState, useEffect } from "react";
import { WeatherData, getWeather, orgWeather } from "../models/weatherData";
import { OtherDetails, TempDetails, Icon } from './WeatherDetails';
import { Box, Table, Message } from "../styles/weather.d";

type Props = {
    cityName: string;
};

const WeatherTile = ({ cityName }: Props): JSX.Element=> {
    const orgWeatherData = orgWeather(cityName)
    const [weather, setWeather] = useState<WeatherData>(orgWeatherData);

    useEffect(() => {
        loadWeatherData(cityName);
    }, [cityName]);

    const loadWeatherData = async (cityName: string) => {
        try {
            const weatherData = await getWeather(cityName);
            // The setTimeout function for demostrate Loading feature only
            setTimeout(() => {
                setWeather(weatherData);
            }, 3000);
        } catch (e) {
            const orgWeatherData = orgWeather(cityName)
            const errorMessage = "Sorry, the system is temporarily unavilable, please refresh again later."
            const errorWeatherData: WeatherData = {...orgWeatherData, message: errorMessage}
            setWeather(errorWeatherData)
        }  
    };
    
    return (
        <Box>
            <Table backgroundColor={weather.weather[0].id === -1 ? "#000000a3" : "transparent"}>
                <Message active={weather.message === "Loading" ? true : false}>
                    {weather.weather[0].id === -1 ? weather.message : ""}
                </Message>
            </Table>
            <OtherDetails otherDetail={weather.name} styleComponent="city"/>
            <Icon otherDetail={weather.weather[0].icon} styleComponent=""/>
            <OtherDetails otherDetail={weather.weather[0].main} styleComponent="main"/>
            <TempDetails otherDetail={weather.main.temp.toFixed(1)} styleComponent="temp"/>
            <TempDetails otherDetail={weather.main.temp_min.toFixed(0) + " ~ " + weather.main.temp_max.toFixed(0) } styleComponent="tempRange"/>
        </Box>
    )
}

export default WeatherTile;