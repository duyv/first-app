import React, { Component } from 'react'
import './ProcessBar.css';
export default class ProcessBar extends Component {
  state = {
    count: 0,
  }
  autoCount = null;
  boxArray = [
    <div className="box-green"></div>
  ]
  componentDidMount() {
    setTimeout(
      this.setState({
        count: this.state.count + 1

      }, () => {
        console.log("state", this.state.count)
      })
      , 1000);
  }
  componentDidUpdate() {
    this.state.autoCount = setInterval(() => {
      if (this.state.count < 20) {
        this.setState({
          count: this.state.count + 1
        }, () => {
          console.log('count', this.state.count)
        }),
          this.boxArray.push(<div className="box-green"></div>)
      }
    }, 1000);
  }

  renderBox = () => {
    console.log(this.boxArray);
    return this.boxArray.map((item, index) => {
      return (
        <div>
          {item}
        </div>

      )
    })
  }
  render() {
    return (
      <div>
        <h1>Cycle count time:{this.state.count}</h1>
        <div className="box-item">
          {this.renderBox()}
        </div>
      </div>
    )
  }
}
