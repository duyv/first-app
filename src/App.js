
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import ButtonClass from "./components/buttonclass";
import LifeCycle from "./components/lifecycle";
import LifeCycleHooks from "./components/lifecyclehooks";
// import ProcessBar from "./components/processbar";
// import Button from "./components/button"
import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/button";
import ButtonClass from "./components/buttonclass";
import Random from "./components/random";

function App() {
  const [count, setCount] = useState(0);
  const [processData, setProcessData] = useState([]);
  const [countVisible, setCountVisible] = useState(true);
  const [randomIndex, setRandomIndex] = useState(0);
  const [showLifeCycle, setShowLifeCycle] = useState(true);
  const arrayData = [
    "#CCC",
    "#FFF",
    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
  ];

  // useEffect(() => {
  //   console.log("A");
  //   const autoProcess = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount === 20) {
  //         clearInterval(autoProcess);
  //         return prevCount;
  //       } else {
  //         return prevCount + 2;
  //       }
  //     });
  //   }, 1000);
  //   return () => {
  //     if (autoProcess) clearInterval(autoProcess);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (count > 0)
  //     setProcessData((prevProcessData, index) => {
  //       console.log("prevProcessData::", prevProcessData);

  //       return [...prevProcessData, <div key={prevProcessData.length} className="indicator"></div>];
  //     });
  // }, [count]);

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

  return (
    <div className="App">
      <header className="App-header">
        <div className="button-container"></div>

        {/* <ProcessBar /> */}
        <Random />

      </header>
    </div>
  );
}

export default App;
