import { useEffect, useRef, useState } from "react";
import Box from "../../components/box";
import "./styles.css";
import useRandom from "../../hooks/useRandom";

export function Week2() {
  const [value, setValue] = useState(0);
  const preValue = useRef(0);
  const { renderChild, onRandom, getRandomChild } = useRandom();
  const boxData = [
    "green",
    "red",
    "yellow",
    "https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg",
    "https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg",
    "https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters%3Ano_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
  ];

  //TODO: Find the solution replace the for method
  const onClick = () => {
    console.log("🚀 ~ file: week-2.js ~ line 10 ~ Week2 ~ renderChild", renderChild);
    onRandom();
    // let newValue = onRandom();
    // setValue((prevState) => {
    //   if (newValue == prevState) {
    //     return onRandom();
    //   } else {
    //     return newValue;
    //   }
    // });

    // let newValue = 0;
    // console.log("value", value);

    // do {
    //   newValue = onRandom();
    // } while (newValue == preValue.current);
    // console.log("current", preValue.current);
    // preValue.current = newValue;
    // setValue(newValue);

    // let randomValues = [];
    // for (let i = 0; i < 3; i++) {
    //   randomValues.push(onRandom());
    // }
    // console.log("🚀 ~ file: week-2.js ~ line 18 ~ onClick ~ randomValues", randomValues);

    // setValue(randomValues);
  };

  // useEffect(() => {
  //   onClick();
  // }, []);

  return (
    <div>
      <h1>Week 2</h1>
      <button onClick={onClick}>Random</button>
      <div className="box-container">
        {new Array(3).fill(null).map((item, index) => {
          const child = getRandomChild();
          return <Box key={index}>{child}</Box>;
        })}
      </div>
    </div>
  );
}
