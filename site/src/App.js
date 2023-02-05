import logo from "./logo.svg";
import "./App.css";
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a className="App-link" href="/login">
            Login
          </a>
          |
          <a className="App-link" href="/register">
            Register
          </a>
          |
          <a className="App-link" href="/mui">
            MUI
          </a>
          |
          <a className="App-link" href="/new-homepage">
           New Homepage
          </a>
        </p>
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

export default App;
