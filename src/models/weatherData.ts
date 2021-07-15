import Axios from "axios";
import env from "../env";

type Weather = {
  id: number;
  main: string;
  icon: string;
}; 

type Main = {
  temp: number;
  temp_min: number;
  temp_max: number;
};

export type WeatherData = {
  weather: Weather[];
  main: Main;
  name: string;
  message: string;
};

const api = Axios.create({
  baseURL: env.apiUrl
});

export const getWeather = async (cityName: string): Promise<WeatherData> => {
  const resp = await api.get(`/weather?q=${cityName}&appid=${env.apiKey}&units=metric`);
  const newResult = resp.data as WeatherData;
  return newResult;
};

export const orgWeather = (cityName: string) => {
  const orgWeatherData = {
    weather: [{
        id: -1,
        main: "Clear",
        description: "",
        icon: "01d"
    }],
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0
    },
    name: cityName.split(",")[0],
    message: "Loading" 
  };
  return orgWeatherData;
};