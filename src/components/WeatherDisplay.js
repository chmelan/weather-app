import { convertTemp, convertSpeed, getUnit } from "../helpers";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const WeatherDisplay = ({
  weatherData,
  geoData,
  unitMode,
  gifData,
  setUnitMode,
  status,
}) => {
  const formatTemp = (temp, unitMode) => {
    return convertTemp(temp, unitMode);
  };

  return (
    <div className="weather-display-container windows-container ">
      {/* Header  */}
      <div className="weather-display-header">
        <h2>
          {status === "success"
            ? geoData.results[0].formatted_address + " Forecast"
            : status === "loading"
            ? "Loading weather data..."
            : "It looks like there may have been an error..."}
        </h2>

        <div>
          <button
            className={
              unitMode === "imp"
                ? "windows-button "
                : "windows-button windows-button-inactive"
            }
            onClick={() => setUnitMode("imp")}
          >
            °F
          </button>
          <button
            className={
              unitMode === "met"
                ? "windows-button "
                : "windows-button windows-button-inactive"
            }
            onClick={() => setUnitMode("met")}
          >
            °C
          </button>
        </div>
      </div>
      {/* Gif/Image */}
      <div className="weather-gif-container">
        <img
          className="weather-gif"
          src={
            status === "success"
              ? gifData.data.images.original.url
              : status === "loading"
              ? "https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif"
              : "https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif"
          }
          alt="GIF of current weather"
        />
      </div>
      {/* widget */}
      {status === "success" ? (
        <div className="widget-container">
          <p className="widget-temp">
            {formatTemp(weatherData.current.temp, unitMode) + " "}
            <span className="widget-unit"> {getUnit("temp", unitMode)}</span>
          </p>
          <img
            className="widget-icon"
            src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
            alt="GIF of current weather"
          />

          <p className="widget-weather">
            {weatherData.current.weather[0].main}
          </p>
        </div>
      ) : status === "loading" ? (
        <h3>Loading your data now...</h3>
      ) : (
        <h3>Uh Oh, there was an error:(</h3>
      )}
      <Tabs className="data-container">
        <TabList>
          <Tab>Current</Tab>
          <Tab>Hourly</Tab>
          <Tab>10 Day</Tab>
        </TabList>

        <TabPanel>
          {status === "success" ? (
            <>
              <div className="widget-container">
                <p className="widget-temp">
                  {formatTemp(weatherData.current.temp, unitMode) + " "}
                  <span className="widget-unit">
                    {" "}
                    {getUnit("temp", unitMode)}
                  </span>
                </p>
                <img
                  className="widget-icon"
                  src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
                  alt="GIF of current weather"
                />

                <p className="widget-weather">
                  {weatherData.current.weather[0].main}
                </p>
              </div>
              <ul>
                <fieldset className="group">
                  <legend>More Details</legend>
                  <li>
                    <p>
                      Feels Like:{" "}
                      {formatTemp(weatherData.current.feels_like, unitMode) +
                        " " +
                        getUnit("temp", unitMode)}
                    </p>
                  </li>
                  <li>
                    <p>Humidity: {weatherData.current.humidity + "%"}</p>
                  </li>
                  <li>
                    <p>
                      Dew Point:{" "}
                      {formatTemp(weatherData.current.dew_point, unitMode) +
                        " " +
                        getUnit("temp", unitMode)}
                    </p>
                  </li>
                  <li>
                    <p>
                      Wind:{" "}
                      {convertSpeed(weatherData.current.wind_speed, unitMode) +
                        " " +
                        getUnit("speed", unitMode)}
                    </p>
                  </li>
                  <li>
                    <p>
                      Temp:{" "}
                      {formatTemp(weatherData.current.temp, unitMode) +
                        " " +
                        getUnit("temp", unitMode)}
                    </p>
                  </li>
                </fieldset>
              </ul>
            </>
          ) : status === "loading" ? (
            <h3>Loading your data now...</h3>
          ) : (
            <h3>Uh Oh, there was an error:(</h3>
          )}
        </TabPanel>
        <TabPanel>
          {status === "success" ? (
            weatherData.hourly.map((hour) => {
              let date = new Date(hour.dt * 1000);

              return (
                <fieldset className="group" key={hour.dt}>
                  <legend>
                    {date.toLocaleString("en-US", {
                      hour: "numeric",
                      hour12: true,
                    }) +
                      " | " +
                      date.toDateString()}
                  </legend>
                  <div className="widget-container">
                    <p className="widget-temp">
                      {formatTemp(hour.temp, unitMode) + " "}
                      <span className="widget-unit">
                        {" "}
                        {getUnit("temp", unitMode)}
                      </span>
                    </p>
                    <img
                      className="widget-icon"
                      src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                      alt="GIF of current weather"
                    />

                    <p className="widget-weather">{hour.weather[0].main}</p>
                  </div>
                </fieldset>
              );
            })
          ) : status === "loading" ? (
            <h3>Loading your data now...</h3>
          ) : (
            <h3>Uh Oh, there was an error:(</h3>
          )}
        </TabPanel>
        <TabPanel>
          {status === "success" ? (
            weatherData.daily.map((day) => {
              let date = new Date(day.dt * 1000).toDateString();

              return (
                <fieldset className="group" key={day.dt}>
                  <legend>{date}</legend>
                  <div className="widget-container">
                    <p className="widget-temp">
                      {formatTemp(day.temp.day, unitMode) + " "}
                      <span className="widget-unit">
                        {" "}
                        {getUnit("temp", unitMode)}
                      </span>
                    </p>
                    <img
                      className="widget-icon"
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                      alt="GIF of current weather"
                    />

                    <p className="widget-weather">{day.weather[0].main}</p>
                  </div>
                </fieldset>
              );
            })
          ) : status === "loading" ? (
            <h3>Loading your data now...</h3>
          ) : (
            <h3>Uh Oh, there was an error:(</h3>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WeatherDisplay;
