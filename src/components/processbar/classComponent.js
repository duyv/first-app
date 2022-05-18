import { Component } from "react";
import "./styles.css";

class ProcessBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      processData: [],
    };
    this.autoProcess = null;
  }

  componentDidUpdate() {
    this.setState((prevState) => {
      return {
        ...prevState,
        processData: [...prevState.processData, <div key={prevState.processData.length} className="indicator"></div>],
      };
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count || this.state.processData.length === 0;
  }

  componentDidMount() {
    this.autoProcess = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.count >= 20) {
          clearInterval(this.autoProcess);
          return { ...prevState, count: prevState.count };
        } else {
          return { ...prevState, count: prevState.count + 2 };
        }
      });
    }, 1000);
  }
  componentWillUnmount() {
    if (this.autoProcess) clearInterval(this.autoProcess);
  }

  renderTextCount = () => {
    const { count } = this.state;
    return <p>Count time: {count}</p>;
  };

  render() {
    const { processData } = this.state;
    return (
      <div className="container">
        {this.renderTextCount()}
        <div className="process-bar">{processData}</div>
      </div>
    );
  }
}

export default ProcessBar;