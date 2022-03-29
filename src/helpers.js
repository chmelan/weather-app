const convert = require("convert-units");

export const convertTemp = (temp, unitMode) => {
  if (unitMode === "imp") {
    return Math.round(convert(temp).from("K").to("F"));
  } else {
    return Math.round(convert(temp).from("K").to("C"));
  }
};

export const convertSpeed = (speed, unitMode) => {
  if (unitMode === "imp") {
    return Math.round(convert(speed).from("knot").to("m/h") * 10) / 10;
  } else {
    return Math.round(convert(speed).from("knot").to("km/h") * 10) / 10;
  }
};

export const getUnit = (measurement, unitMode) => {
  if ((unitMode === "imp") & (measurement === "temp")) {
    return "°F";
  }
  if ((unitMode === "imp") & (measurement === "speed")) {
    return "mph";
  }
  if ((unitMode === "met") & (measurement === "temp")) {
    return "°C";
  }
  if ((unitMode === "met") & (measurement === "speed")) {
    return "km/h";
  }
};

export const degToCompass = (num) => {
  const val = Number.parseInt(num / 45);
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  console.log(val, directions);
  return directions[val % 8];
};

//return a promise after a delay
export const delay = (delay) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
};
