import { useState } from "react";
import searchIcon from "../images/globe_map-0.png";
import windowsLogo from "../images/windows-0.png";

const TopNav = ({ getCompleteWeather, getGeo }) => {
  const [formValue, setFormValue] = useState("");

  const handleSubmit = (e) => {
    if (formValue !== "") {
      getCompleteWeather(formValue);
      e.preventDefault();
    }
  };

  return (
    <nav className="topNav windows-container">
      <img src={windowsLogo} alt="windows 98 logo" className="nav-icon" />
      <h1 className="hidden-mobile">Weather Pro Version 1998 v1.3</h1>

      <label htmlFor="location" title="Location" />
      <input
        type="text"
        name="location"
        id="location"
        value={formValue}
        placeholder="Please type a city"
        onChange={(e) => setFormValue(e.target.value)}
      />

      <button
        className="windows-button search-icon"
        onClick={handleSubmit}
        title="Get Weather"
      >
        <img src={searchIcon} alt="globe with magnifying glass" />
      </button>
    </nav>
  );
};

export default TopNav;
