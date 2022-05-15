import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from "./navigation";
import RootRouter from "./router";

function App() {
  // const [time, setTime] = useState(0);
  // const [start, setStart] = useState(false);
  // const renderClock = () => {
  //   const seconds = time * 60;
  //   return <h1>{`Timeout: ${seconds}`}</h1>;
  // };

  // const startCountCount = () => {};

  // useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          <h1>Home Page</h1>
          {/* {renderClock()} */}
          <Navigation />
          <RootRouter />
        </div>
      </header>
    </div>
  );
}

export default App;
