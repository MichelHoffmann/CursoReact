import logo from "./logo.svg";
import "./App.css";

export default class App {
  state = {
    name: 'Michel'
  }

  render (
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá, eu sou o !
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Este é um link
        </a>
      </header>
    </div>
    )
  );
}

// function App() {
//   state = {
//     name: 'Michel'
//   }

  
// }

// export default App;
