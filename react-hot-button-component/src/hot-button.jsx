import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    if (this.state.clicks < 3) {
      return <button onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 6) {
      return <button className='three' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 9) {
      return <button className='six' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 12) {
      return <button className='nine' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 15) {
      return <button className='twelve' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks < 18) {
      return <button className='fifteen' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clicks >= 18) {
      return <button className='eighteen' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
