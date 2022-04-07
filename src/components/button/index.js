import { useState } from "react";
import "./styles.css";

// var autoCount = null;
const Button = (props) => {
  const [count, setCount] = useState(props.number);
  //   useEffect(() => {
  //     const autoCount = setInterval(() => {
  //       setCount((prevState) => prevState + 1);
  //     }, 1000);
  //     return () => {
  //       if (autoCount) clearInterval(autoCount);
  //     };
  //   }, []);
  return (
    <button className="button" onClick={props.onTouch} value={props.number}>
      {count}
      {props.children}
    </button>
  );
};

export default Button;