import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  createContent() {
    return (this.props.topics.map((topic, index) => {
      return (
        <div key={index}>
          <h2 id={index} onClick={this.handleClick}>{Object.keys(topic)[0]}</h2>
          {
            index === parseInt(this.state.openIndex) &&
            <div>
              <p>{topic[Object.keys(topic)[0]]}</p>
            </div>
          }
          {
            index !== parseInt(this.state.openIndex) &&
            <div className='hidden'>
              <p>{topic[Object.keys(topic)[0]]}</p>
            </div>
          }
        </div>
      );
    }));
  }

  handleClick(event) {
    if (this.state.openIndex === event.target.id) {
      this.setState({ openIndex: null });
    } else {
      this.setState({ openIndex: event.target.id });
    }
  }

  render() {
    return (
      <div className='container'>
        {this.createContent()}
      </div>
    );
  }
}
