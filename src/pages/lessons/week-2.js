import { useEffect, useRef, useState } from "react";
import Box from "../../components/box";
import "./styles.css";
import useRandom from "../../hooks/useRandom";

export function Week2() {
  const [, setRefresh] = useState(false);
  const { getRandomChild } = useRandom();
  const boxData = [
    "green",
    "red",
    "yellow",
    "https://www.gardeningknowhow.com/wp-content/uploads/2019/09/flower-color.jpg",
    "https://thumbs.dreamstime.com/b/aster-flowers-art-design-26968847.jpg",
    "https://www.thoughtco.com/thmb/U3uVJMsgzLd00DbkIicnnIYM_kM=/1414x1414/smart/filters%3Ano_upscale()/lotus-flower-828457262-5c6334b646e0fb0001dcd75a.jpg",
  ];

  let boxDataUse = [...boxData];

  const onClick = () => {
    boxDataUse = [...boxData];
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return (
    <div>
      <h1>Week 2</h1>
      <button onClick={onClick}>Random</button>
      <div className="box-container">
        {new Array(3).fill(null).map((item, index) => {
          const [child, indexChild] = getRandomChild(boxDataUse);
          boxDataUse.splice(indexChild, 1);
          return <Box key={index}>{child}</Box>;
        })}
      </div>
    </div>
  );
}
