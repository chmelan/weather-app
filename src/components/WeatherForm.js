import React, { useState } from "react";

const WeatherForm = ({ getCompleteWeather }) => {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e) => {
    if (formValue !== "") {
      getCompleteWeather(formValue);
      e.preventDefault();
    }
  };

  return (
    <nav className="topNav">
      <h1>Weather Pro Version 1997 v1.3</h1>
      <label htmlFor="location" title="Location" />
      <input
        type="text"
        name="location"
        id="location"
        value={formValue}
        placeholder="Please type a city"
        onChange={(e) => setFormValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Get Weather</button>
    </nav>
  );
};

export default WeatherForm;
