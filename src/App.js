import React, { useState } from "react";
import axios from 'axios';


export default function App(props) {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(event) {
    // searchInput is not provided, don't make the call
    if (!searchInput) return null;
    console.log(searchInput, "searchInput");
    setIsLoading(true); // Once the user click search, you want to show loading indicator
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=193afd01b965f6a8b5609e9278812cbe&units=metric`;
    event.preventDefault();
    axios.get(url).then(function (response) {
      setDescription(response.data.weather[0].description);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);
      setTemperature(response.data.main.temp);
      setIsLoading(false); // After the ajax call(success, failure), disable the loading indicator
    });

    setSearchInput("");
  }

  function handleChange(event) {
    console.log(event);
    setSearchInput(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city..."
        onChange={handleChange}
      />

      <input type="submit" value="Search" />
    </form>
  );

  console.log(isLoading, "isLoading state");

  // Return the result
  return (
    <div>
      {form}
      {/* If it's not in loading state */}
      {temperature ? (
        <ul>
          <li> {temperature} °C </li>
          <li> {description} </li>
          <li> {humidity}%</li>
          <li> {wind} Km/h</li>
          <li> {icon} Km/h</li>
        </ul>
      ) : null}
      {isLoading ? "loading..." : null}
    </div>
  );
}
