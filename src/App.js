import { Link } from "react-router-dom";
import "./App.css";
import FormFilm from "./components/film";
import Navigation from "./navigation";
import RootRouter from "./router";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className="button-container">
          <h1>Home Page</h1>
          <Navigation />
          <RootRouter />
        </div> */}
        <FormFilm />
      </header>
    </div>
  );
}

export default App;
