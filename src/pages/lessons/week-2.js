import { useEffect, useRef, useState } from "react";
import Box from "../../components/box";
import "./styles.css";
import useRandom from "../../hooks/useRandom";

export function Week2() {
  const [value, setValue] = useState(0);
  const preValue = useRef(0);
  const { renderChild, onRandom } = useRandom();

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
          return <Box key={index}>{renderChild}</Box>;
        })}
      </div>
    </div>
  );
}
