import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const inputValue = this.state.value;
    let warningText;
    let icon;
    if (!inputValue) {
      warningText = 'A password is required.';
      icon = 'fa-solid fa-xmark';
    } else if (inputValue.length < 8) {
      warningText = 'Your password is too short.';
      icon = 'fa-solid fa-xmark';
    } else {
      warningText = '';
      icon = 'fa-solid fa-check';
    }
    return (
      <form>
        <label htmlFor="password">Password</label>
        <input type="password" value={this.state.value} id="password" onChange={this.handleChange} />
        <i className={icon}></i>
        <p>{warningText}</p>
      </form>
    );
  }
}
