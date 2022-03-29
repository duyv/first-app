import { useEffect, useRef, useState } from "react";
import "./styles.css";

function ProcessBar() {
  const [count, setCount] = useState(0);
  const [processData, setProcessData] = useState([]);

  useEffect(() => {
    const autoProcess = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 20) {
          clearInterval(autoProcess);
          return prevCount;
        } else {
          return prevCount + 2;
        }
      });
    }, 1000);
    return () => {
      if (autoProcess) clearInterval(autoProcess);
    };
  }, []);

  useEffect(() => {
    if (count > 0)
      setProcessData((prevProcessData) => {
        return [...prevProcessData, <div key={prevProcessData.length} className="indicator"></div>];
      });
  }, [count]);

  const renderTextCount = () => {
    return <p>Count time: {count}</p>;
  };

  return (
    <div className="container">
      {renderTextCount()}
      <div className="process-bar">{processData}</div>
    </div>
  );
}

export default ProcessBar;
