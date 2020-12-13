import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=193afd01b965f6a8b5609e9278812cbe&units=metric`;
    axios
      .get(url)
      .then(function (response) {
        setTemperature(Math.round(response.data.main.temp));
        setDescription(response.data.weather[0].description);
        setHumidity(Math.round(response.data.main.humidity));
        setWind(Math.round(response.data.wind.speed));
        console.log(response.data.weather[0].icon);
        setIcon(response.data.weather[0].icon);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  let result = (
    <ul>
      <li> {temperature}</li>
      <li> {description}</li>
      <li>{humidity}</li>
      <li>{wind} </li>
      <li>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather icon"
        />{" "}
      </li>
    </ul>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!temperature && !loading) {
    return form;
  }

  return (
    <div>
      {form}
      {result}
    </div>
  );
}
