import { Component } from "react";
import "./styles.css";

class ButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.autoCount = null;
  }

  // componentDidUpdate() {
  //   this.autoCount = setInterval(() => {
  //     this.setState((prevState) => {
  //       return {
  //         ...prevState,
  //         count: prevState.count + 1,
  //       };
  //     });
  //   }, 1000);
  //   clearInterval(this.autoCount);
  // }

  componentDidMount() {
    // this.autoCount = setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       count: prevState.count + 1,
    //     };
    //   });
    // }, 1000);
  }

  componentWillUnmount() {
    if (this.autoCount) clearInterval(this.autoCount);
  }

  render() {
    return (
      <button className="button" onClick={this.props.onTouch}>
        {this.state.count}
        {this.props.children}
      </button>
    );
  }
}

export default ButtonClass;