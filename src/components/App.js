import { useState, useEffect } from "react";

import WeatherDisplay from "./WeatherDisplay";
import TopNav from "./TopNav";
// import Clippy from "./Clippy";
import Footer from "./Footer";

const App = () => {
  const [unitMode, setUnitMode] = useState("imp");
  const [weatherData, setWeatherData] = useState();
  const [geoData, setGeoData] = useState();
  const [gifData, setGifData] = useState();
  const [status, setStatus] = useState();

  // Audio player functionality
  const handlePlayPause = () => {
    if (audioIsPlaying) {
      elevatorMusic.pause();
    } else {
      elevatorMusic.play();
    }
    setAudioIsPlaying(!audioIsPlaying);
  };

  const [elevatorMusic] = useState(new Audio("/BossaBossa.mp3"));
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);

  useEffect(() => {
    // Get the weather if we don't have it already
    if (!status) {
      getCompleteWeather("washington dc");
    }
  });

  // Reach 3rd party API's through Amazon Proxy
  const getCompleteWeather = async (location) => {
    setStatus("loading");
    try {
      const response = await fetch(
        `https://60j7z972kl.execute-api.us-east-1.amazonaws.com/production/weatherdata?location=${location}`,
        { mode: "cors" }
      );
      //parse the data into human friendly JSON
      const parsed = await response.json();

      // store the data in state

      await Promise.all([
        setGeoData(parsed.geoData),
        setWeatherData(parsed.weatherData),
        setGifData(parsed.gif),
      ]);

      setStatus("success");
    } catch (e) {
      setStatus("error");
      console.error(e);
    }
  };

  return (
    <div className="app">
      <TopNav getCompleteWeather={getCompleteWeather} />

      <WeatherDisplay
        status={status}
        geoData={geoData}
        weatherData={weatherData}
        unitMode={unitMode}
        gifData={gifData}
        setUnitMode={setUnitMode}
      />

      {/* <Clippy
        handlePlayPause={handlePlayPause}
        audioIsPlaying={audioIsPlaying}
      /> */}

      <Footer
        handlePlayPause={handlePlayPause}
        audioIsPlaying={audioIsPlaying}
      />
    </div>
  );
};

export default App;
