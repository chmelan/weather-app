import React, { useState } from "react";

function WeatherForm(props) {
  const [formValue, setFormValue] = useState("");
  const handleSubmit = (e) => {
    props.getCompleteWeather(formValue);
    e.preventDefault();
  };
  return (
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
  );
}

export default WeatherForm;
