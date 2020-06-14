import React, { useEffect, useState } from "react";
import { fetchCountries } from "../api/api";
import "./countryPicker.css";

const Countries = ({ countryChange }) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      setCountry(await fetchCountries());
    };
    fetchCountry();
  }, []);

  console.log(country);
  return (
    <div className="countrypicker">
      <form onChange={(e) => countryChange(e.target.value)}>
        <select className="select">
          <option>Global</option>
          {country.map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Countries;
