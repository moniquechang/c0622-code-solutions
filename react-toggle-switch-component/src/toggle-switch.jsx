import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked) {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });

    }
  }

  render() {
    if (this.state.isClicked) {
      return (
        <div className='background'>
          <div className='switch-on'>
            <button className='circle-on' onClick={this.handleClick}></button>
          </div>
          <p>ON</p>
        </div>
      );
    } else {
      return (
        <div className='background'>
          <div className='switch-off'>
            <button className='circle-off' onClick={this.handleClick}></button>
          </div>
          <p>OFF</p>
        </div>
      );
    }
  }
}
