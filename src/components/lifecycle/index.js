import { Component } from "react";
import "./styles.css";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: 5,
    };

    this.autoCount = null;
    // 1
    console.log("A");
  }

  componentDidUpdate() {
    // this.autoCount = setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       ...prevState,
    //       count: prevState.count + 1,
    //     };
    //   });
    // }, 1000);
    // clearInterval(this.autoCount);
    console.log("D");
    if (this.state.time > 5) {
      console.log("E");
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    //3
    console.log("C");
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
    console.log("E");
    // if (this.autoCount) clearInterval(this.autoCount);
  }

  render() {
    // 2
    console.log("B");
    return (
      <button
        className="button"
        onClick={() => this.setState((prevState) => ({ ...prevState, time: prevState.time + 1 }))}
      >
        {this.state.count}
        {this.props.children}
      </button>
    );
  }
}

export default LifeCycle;