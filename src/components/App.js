import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";
import ErrorMessage from "./ErrorMessage";

import { useState, useEffect } from "react";

const App = () => {
  const [tempMode, setTempMode] = useState("F");

  const [weatherData, setWeatherData] = useState();
  const [weatherGif, setWeatherGif] = useState();

  useEffect(() => {
    if (!weatherData) {
      getCompleteWeather("lancaster");
    }
  });

  const getWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a3e0ba4476d1096ca94921c3346150b9`,
      { mode: "cors" }
    );
    console.log(response);
    if (!response.ok) {
      setWeatherData(null);
      return "error";
    }

    const weatherData = await response.json();
    setWeatherData(weatherData);
    return weatherData;
  };

  // code for gathering weather gifs
  const getWeatherGif = async (weather) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=AEepGv1Y4EwvuicBz5PnylRLHRS5Xruc&s=${weather}`,
      { mode: "cors" }
    );
    const weatherGifData = await response.json();
    console.log(weatherGifData.data.images.original.url);
    setWeatherGif(weatherGifData.data.images.original.url);
  };

  const getCompleteWeather = async (location) => {
    const weatherData = await getWeather(location);
    if (weatherData === "error") return;
    getWeatherGif(weatherData.weather[0].main);
  };

  return (
    <div className="app">
      <WeatherForm getCompleteWeather={getCompleteWeather} />

      {weatherData ? (
        <WeatherDisplay
          weatherData={weatherData}
          tempMode={tempMode}
          weatherGif={weatherGif}
          setTempMode={setTempMode}
        />
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};

export default App;
