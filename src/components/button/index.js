import "./styles.css";

function Button(props) {
  return (
    <button className="button" onClick={props.onTouch} value={props.number}>
      {props.number}
      {props.children}
    </button>
  );
}

export default Button;
