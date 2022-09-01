import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasStarted: false,
      count: 0,
      intervalId: null
    };

    this.handleClickStartPause = this.handleClickStartPause.bind(this);
    this.handleClickClear = this.handleClickClear.bind(this);
  }

  handleClickStartPause() {
    if (!this.state.hasStarted) {
      this.setState({ hasStarted: true });
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      this.setState({ hasStarted: false });
      clearInterval(this.intervalId);
    }
  }

  handleClickClear() {
    this.setState({ count: 0 });
  }

  render() {
    if (!this.state.hasStarted) {
      return (
        <div>
          <div className="circle" onClick={this.handleClickClear}>
            <p className="number">{this.state.count}</p>
          </div>
          <i className="fa-sharp fa-solid fa-play" onClick={this.handleClickStartPause}></i>
        </div>
      );
    } else if (this.state.hasStarted) {
      return (
        <div>
          <div className="circle">
            <p className="number">{this.state.count}</p>
          </div>
          <i className="fa-sharp fa-solid fa-pause" onClick={this.handleClickStartPause}></i>
        </div>
      );
    }
  }
}
