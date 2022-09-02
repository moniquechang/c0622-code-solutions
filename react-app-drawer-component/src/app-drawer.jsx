import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconIsClicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.iconIsClicked) {
      this.setState({ iconIsClicked: true });
    } else {
      this.setState({ iconIsClicked: false });
    }
  }

  render() {
    if (!this.state.iconIsClicked) {
      return (
        <div>
          <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
          <div className='modal-background hidden'></div>
          <div className='menu-window hidden'>
            <p>Choose a Drink</p>
            <a>Hot Coffee</a>
            <a>Iced Coffee</a>
            <a>Tea</a>
            <a>Decaf</a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <i className="fa-solid fa-bars"></i>
          <div className='modal-background' onClick={this.handleClick}></div>
          <div className='menu-window'>
            <p>Choose a Drink</p>
            <a onClick={this.handleClick}>Hot Coffee</a>
            <a onClick={this.handleClick}>Iced Coffee</a>
            <a onClick={this.handleClick}>Tea</a>
            <a onClick={this.handleClick}>Decaf</a>
          </div>
        </div>
      );
    }
  }
}
