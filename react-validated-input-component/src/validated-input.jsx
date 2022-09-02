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
    if (!this.state.value) {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.value} id="password" onChange={this.handleChange} />
            <i className="fa-solid fa-xmark"></i>
            <p>A password is required.</p>
        </form>
      );
    } else if (this.state.value.length < 8) {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.value} id="password" onChange={this.handleChange} />
            <i className="fa-solid fa-xmark"></i>
            <p>Your password is too short.</p>
        </form>
      );
    } else {
      return (
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" value={this.state.value} id="password" onChange={this.handleChange} />
            <i className="fa-solid fa-check"></i>
        </form>
      );
    }
  }
}
