import { useState } from "react";
// import Button from "./components/button"

import "./styles.css";
import Button from "../button";
import ButtonClass from "../buttonclass";

function Random() {
  const [count, setCount] = useState(0);

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

  const onTouch = (item) => {
    const newIndex = Math.round(Math.random() * 2);
    setRandomIndex(newIndex);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container">
          {buttonData.map((item, index) => {
            const data = arrayData[randomIndex];
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
