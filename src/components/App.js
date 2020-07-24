import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import WeatherForm from "./WeatherForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tempMode: "farenheit" };
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
      return;
    }
    this.updateWeatherError(false);
    const weatherData = await response.json();
    this.updateWeatherData(weatherData);
    console.log(weatherData);
  };
  updateWeatherError(error) {
    this.setState({ weatherError: error });
  }
  updateWeatherData(data) {
    this.setState({ weatherData: data });
  }
  render() {
    return (
      <div className="app">
        <button onClick={() => this.getWeather("lancaster")}>Click ME</button>

        <WeatherForm getCompleteWeather={this.getWeather} />
        {this.state.weatherError ? (
          <div className="weatherError">
            There was a problem grabbing the weather
          </div>
        ) : null}

        {this.state.weatherData ? (
          <WeatherDisplay
            weatherData={this.state.weatherData}
            tempMode={this.state.tempMode}
            weatherGif={this.state.weatherGif}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
