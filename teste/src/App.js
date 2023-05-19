import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    name: "Michel Hoffmann",
  };

  stateClick = () => {
    if (this.state.name === "Fui clicado")
      this.setState({ name: "Michel Hoffmann" });
    if (this.state.name === "Michel Hoffmann")
      this.setState({ name: "Fui clicado" });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={this.stateClick}>{name}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
