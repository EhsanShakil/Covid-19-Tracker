import React from "react";
import { fetchData } from "./api/api";
import Data from "./Cases";
import Chart from "./Charts/Charts";
import Countries from "./Countries/Countries";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data: data, country: country });
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "#dbdde1", textAlign: "center", fontSize: "50px" }}>
          Covid-19-Tracker
        </h1>
        <Data data={this.state.data} />
        <Countries countryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
