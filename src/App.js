// import Button from "./components/button"
import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import ButtonClass from "./components/buttonclass";

const tempImage = ["", "", ""];

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

  const onTouch = (event) => {
    setCount(event.target.value);
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
        <div className="button-container">
          {buttonData.map((item, index) => {
            return (
              <Button key={index} number={item} onTouch={onTouch}>
                <p>ABC</p>
                <img
                  className="image"
                  src={"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"}
                />
              </Button>
            );
          })}
        </div>
        <ButtonClass number={12}>
          <p>Button text</p>
          <img
            className="image"
            src={
              "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            }
          />
        </ButtonClass>
        {renderTextCount()}
      </header>
    </div>
  );
}

export default App;
