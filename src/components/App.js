import React, { Fragment } from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tempMode: "F" };
  }

  getWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a3e0ba4476d1096ca94921c3346150b9`,
      { mode: "cors" }
    );
    console.log(response);
    if (!response.ok) {
      this.updateWeatherError(true);
      this.updateWeatherData(null);
      return "error";
    }
    this.updateWeatherError(false);
    const weatherData = await response.json();
    this.updateWeatherData(weatherData);
    return weatherData;
  };

  // code for gathering weather gifs
  getWeatherGif = async (weather) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=AEepGv1Y4EwvuicBz5PnylRLHRS5Xruc&s=${weather}`,
      { mode: "cors" }
    );

    const weatherGifData = await response.json();
    console.log(weatherGifData.data.images.original.url);

    this.updateWeatherGif(weatherGifData.data.images.original.url);
  };

  getCompleteWeather = async (location) => {
    const weatherData = await this.getWeather(location);
    if (weatherData === "error") return;
    this.getWeatherGif(weatherData.weather[0].main);
  };

  updateWeatherError = (error) => {
    this.setState({ weatherError: error });
  };
  updateWeatherData = (data) => {
    this.setState({ weatherData: data });
  };
  updateWeatherGif = (url) => {
    this.setState({ weatherGif: url });
  };
  updateTempMode = (mode) => {
    this.setState({ tempMode: mode });
  };
  render() {
    return (
      <div className="app">
        <WeatherForm getCompleteWeather={this.getCompleteWeather} />
        {this.state.weatherError ? (
          <Fragment>
            <div className="weatherError">
              There was a problem grabbing the weather
            </div>
            <img
              src="https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif"
              alt="GIF of tiled error messages"
            />
          </Fragment>
        ) : null}

        {this.state.weatherData ? (
          <WeatherDisplay
            weatherData={this.state.weatherData}
            tempMode={this.state.tempMode}
            weatherGif={this.state.weatherGif}
            updateTempMode={this.updateTempMode}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
