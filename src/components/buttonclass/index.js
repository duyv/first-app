import { Component } from "react";
import "./styles.css";

class ButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className="button">
        {this.props.number}
        {this.props.children}
      </button>
    );
  }
}

export default ButtonClass;
