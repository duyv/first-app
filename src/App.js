import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/button"
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };

  let buttonData = [];
  for (let i = 1; i < 10; i++) {
    buttonData.push(i);
  }

  const renderTextCount = () => {
    return <p>Count time: {count}</p>;
  };

  const showAlert = (message) => {
    alert(message);
  };

  const renderButton = (textButton, onClick, index) => {
    return (
      <button key={`${index}`} className="button-count" onClick={onClick}>
        <p>{textButton}</p>
      </button>
    );
  };

  const renderButtonNumber = (button) => {
    return (
      <button key={`${button}`} className="button-count" onClick={() => setCount(button)}>
        <p>{button}</p>
      </button>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        {/* {renderButton("+", onPlus)}
        {renderButton("-", onMinus)} */}
        <p>tesst</p>
        <div className="button-container">
          {buttonData.map((item, index) => {
            return renderButtonNumber(item);
          })}
        </div>
        {renderTextCount()}
      </header>
    </div>
  );
}

export default App;
