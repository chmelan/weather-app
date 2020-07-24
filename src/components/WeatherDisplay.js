import React from "react";
import { kelvinToFarenheit, kelvinToCelcius } from "../helpers";

class WeatherDisplay extends React.Component {
  render() {
    return (
      <div className="weatherDisplay">
        <div className="wDHeader">
          <h2>{this.props.weatherData.name} Weather</h2>
          <div className="tempBtnContainer">
            <button
              value="C"
              className={
                this.props.tempMode === "C"
                  ? "tempBtn tempBtnActive"
                  : "tempBtn"
              }
              onClick={() => this.props.updateTempMode("C")}
            >
              °C
            </button>
            <button
              value="F"
              className={
                this.props.tempMode === "F"
                  ? "tempBtn tempBtnActive"
                  : "tempBtn"
              }
              onClick={() => this.props.updateTempMode("F")}
            >
              °F
            </button>
          </div>
        </div>
        <h3 style={{ textTransform: "capitalize" }}>
          {this.props.weatherData.weather[0].description}
        </h3>
        <h3>
          Temperature:{" "}
          {this.props.tempMode === "F"
            ? kelvinToFarenheit(this.props.weatherData.main.temp).toFixed(1) +
              "°F"
            : kelvinToCelcius(this.props.weatherData.main.temp).toFixed(1) +
              "°C"}
        </h3>
        <h3>
          Range:{" "}
          {this.props.tempMode === "F"
            ? kelvinToFarenheit(this.props.weatherData.main.temp_min).toFixed(
                1
              ) + "°F"
            : kelvinToCelcius(this.props.weatherData.main.temp_min).toFixed(1) +
              "°C"}{" "}
          -{" "}
          {this.props.tempMode === "F"
            ? kelvinToFarenheit(this.props.weatherData.main.temp_max).toFixed(
                1
              ) + "°F"
            : kelvinToCelcius(this.props.weatherData.main.temp_max).toFixed(1) +
              "°C"}
        </h3>

        <h3>Humidity: {this.props.weatherData.main.humidity}%</h3>
        <h3>Pressure: {this.props.weatherData.main.pressure}kPa</h3>
        <img
          className="weatherGIF"
          src={this.props.weatherGif}
          alt="GIF of current weather"
        />
      </div>
    );
  }
}

export default WeatherDisplay;
