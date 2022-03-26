import { kelvinToFarenheit, kelvinToCelcius } from "../helpers";

const WeatherDisplay = ({ weatherData, tempMode, weatherGif, setTempMode }) => {
  return (
    <div className="weatherDisplay">
      <div className="wDHeader">
        <h2>{weatherData.name} Weather</h2>
        <div className="tempBtnContainer">
          <button
            className={tempMode === "C" ? "tempBtn tempBtnActive" : "tempBtn"}
            onClick={() => setTempMode("C")}
          >
            °C
          </button>
          <button
            className={tempMode === "F" ? "tempBtn tempBtnActive" : "tempBtn"}
            onClick={() => setTempMode("F")}
          >
            °F
          </button>
        </div>
      </div>
      <h3 style={{ textTransform: "capitalize" }}>
        {weatherData.weather[0].description}
      </h3>
      <h3>
        Temperature:{" "}
        {tempMode === "F"
          ? kelvinToFarenheit(weatherData.main.temp).toFixed(1) + "°F"
          : kelvinToCelcius(weatherData.main.temp).toFixed(1) + "°C"}
      </h3>
      <h3>
        Range:{" "}
        {tempMode === "F"
          ? kelvinToFarenheit(weatherData.main.temp_min).toFixed(1) + "°F"
          : kelvinToCelcius(weatherData.main.temp_min).toFixed(1) + "°C"}{" "}
        -{" "}
        {tempMode === "F"
          ? kelvinToFarenheit(weatherData.main.temp_max).toFixed(1) + "°F"
          : kelvinToCelcius(weatherData.main.temp_max).toFixed(1) + "°C"}
      </h3>

      <h3>Humidity: {weatherData.main.humidity}%</h3>
      <h3>Pressure: {weatherData.main.pressure}kPa</h3>
      <img
        className="weatherGIF"
        src={weatherGif}
        alt="GIF of current weather"
      />
    </div>
  );
};

export default WeatherDisplay;
