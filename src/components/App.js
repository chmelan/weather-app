import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tempMode: "farenheit" };
  }
  componentDidMount() {
    this.getWeather("Lancaster");
    this.getWeatherGif("rain");
  }
  getWeather = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a3e0ba4476d1096ca94921c3346150b9`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    console.log(weatherData);

    this.updateWeatherData(weatherData);

    return weatherData;
  };

  getWeatherGif = async (weather) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=AEepGv1Y4EwvuicBz5PnylRLHRS5Xruc&s=${weather}`,
      { mode: "cors" }
    );

    const weatherGifData = await response.json();
    console.log(weatherGifData.data.images.original.url);

    this.updateWeatherGif(weatherGifData.data.images.original.url);
    return weatherGifData.data.images.original.url;
  };

  getCompleteWeather = async (location) => {
    const weatherData = await this.getWeather(location);
    this.getWeatherGif(weatherData.weather[0].main);
  };

  updateWeatherData = (newWeatherData) => {
    this.setState({ weatherData: newWeatherData });
  };
  updateWeatherGif = (newGif) => {
    this.setState({ weatherGif: newGif });
  };

  render() {
    return (
      <div className="app">
        <WeatherForm getCompleteWeather={this.getCompleteWeather} />
        {this.state.weatherData ? (
          <WeatherDisplay
            weatherData={this.state.weatherData}
            tempMode={this.state.tempMode}
            weatherGif={this.state.weatherGif}
          />
        ) : (
          <div> There was an error retrieving that city </div>
        )}
      </div>
    );
  }
}

export default App;
