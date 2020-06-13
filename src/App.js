import React from "react";
import { fetchData } from "./api/api";
import Data from "./Cases";
import Chart from "./Charts/Charts";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <h1>Covid-19-Tracker</h1>
        <Data data={this.state.data} />
        <Chart />
      </div>
    );
  }
}

export default App;
