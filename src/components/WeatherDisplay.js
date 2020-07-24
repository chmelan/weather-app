import React from "react";
import { kelvinToFarenheit, kelvinToCelcius } from "../helpers";

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div className="weatherDisplay">
        <h3>The weather in {this.props.weatherData.name} is</h3>

        <h2>
          <button
            value="C"
            className={
              this.props.tempMode === "C" ? "tempBtn tempBtnActive" : "tempBtn"
            }
            onClick={() => this.props.updateTempMode("C")}
          >
            °C
          </button>
          <button
            value="F"
            className={
              this.props.tempMode === "F" ? "tempBtn tempBtnActive" : "tempBtn"
            }
            onClick={() => this.props.updateTempMode("F")}
          >
            °F
          </button>
          {this.props.tempMode === "F"
            ? kelvinToFarenheit(this.props.weatherData.main.temp).toFixed(1) +
              "°F"
            : kelvinToCelcius(this.props.weatherData.main.temp).toFixed(1) +
              "°C"}
        </h2>
        <h2>{this.props.weatherData.weather[0].main}</h2>
        <h2>{this.props.weatherData.weather[0].description}</h2>
        <img src={this.props.weatherGif} alt="GIF of current weather" />
      </div>
    );
  }
}

export default WeatherDisplay;
