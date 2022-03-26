import { useEffect, useState } from "react";
import "./styles.css";

// var autoCount = null;
const LifeCycleHooks = (props) => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(5);

  //=== componentDidMount ===
  const callbackFunctionA = () => {
    console.log("A");
    return () => {
      // --> componentWillUnmount
      // TODO
    };
  };
  const dependenciesA = [];
  useEffect(callbackFunctionA, dependenciesA);
  // ====END===

  //=== componentDidUpdate ===
  const callbackFunctionB = () => {
    console.log("count", count);
    console.log("D");
  };
  useEffect(callbackFunctionB);
  // === END ===

  //=== componentDidUpdate with Conditions ===
  const callbackFunctionC = () => {
    console.log("E");
  };

  const dependenciesC = [count, time];
  useEffect(callbackFunctionC, dependenciesC);
  // === END ===

  // useEffect(() => {
  //   const autoCount = setInterval(() => {
  //     setCount((prevState) => prevState + 1);
  //   }, 1000);
  //   return () => {
  //     if (autoCount) clearInterval(autoCount);
  //   };
  // }, []);

  console.log("B", count);
  return (
    // ==> render
    <button className="button" onClick={() => setTime((prevTime) => prevTime + 1)} value={props.number}>
      {count}
      {props.children}
    </button>
  );
};

export default LifeCycleHooks;
