import React from "react";
import { fetchData } from "./api/api";
import Data from "./Cases";

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
        <h1>Hello World</h1>
        <Data data={this.state.data} />
      </div>
    );
  }
}

export default App;
