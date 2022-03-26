// import Button from "./components/button"
import { useEffect, useState } from "react";
import "./styles.css";
import Button from "../button";
import ButtonClass from "../buttonclass";

function Random() {
  const [count, setCount] = useState(0);
  const [processData, setProcessData] = useState([]);
  const [countVisible, setCountVisible] = useState(true);
  const [randomIndex, setRandomIndex] = useState(0);
  const arrayData = [
    "#CCC",
    "#FFF",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  ];

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

  const onTouch = (item) => {
    // console.log("event::", item);
    // setCount(item);
    const newIndex = Math.round(Math.random() * 3);
    setRandomIndex(newIndex);
  };

  const toggleButton = () => {
    setCountVisible((prevCountVisible) => !prevCountVisible);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          {buttonData.map((item, index) => {
            console.log("randomIndex;:", randomIndex);
            const data = arrayData[randomIndex];
            console.log("data::", data);
            if (!data) return null;
            const isColor = data.startsWith("#");
            const child = isColor ? (
              <div className="box" style={{ backgroundColor: data }}></div>
            ) : (
              <img className="image" src={data} />
            );
            return (
              <Button key={index} number={item} onTouch={() => onTouch(item)}>
                {child}
              </Button>
            );
          })}
        </div>
        <ButtonClass onTouch={onTouch}>
          <p>Toggle Button</p>
        </ButtonClass>
      </header>
    </div>
  );
}

export default Random;
