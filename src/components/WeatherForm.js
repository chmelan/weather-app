import React, { useState } from "react";

function WeatherForm(props) {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    props.getCompleteWeather(formValue);
    e.preventDefault();
  };
  return (
    <nav className="topNav">
      <h1>Weather Pro Version 1997 v1.3</h1>
      <form>
        <input
          type="text"
          name="weather"
          id="weather"
          value={formValue}
          placeholder="Please type a city"
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Get Weather
        </button>
      </form>
    </nav>
  );
}

export default WeatherForm;
