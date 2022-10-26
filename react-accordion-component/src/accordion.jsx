import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openIndex: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const newIsClickedArr = [];
    this.props.topics.map(topic => newIsClickedArr.push(false));
    this.setState({ isClicked: newIsClickedArr });
  }

  createContent() {
    return (this.props.topics.map((topic, index) => {
      return (
        <div key={index}>
          <h2 id={index} onClick={this.handleClick}>{Object.keys(topic)[0]}</h2>
          {
            this.state.isClicked[index] &&
            <div>
              <p>{topic[Object.keys(topic)[0]]}</p>
            </div>
          }
          {
            !this.state.isClicked[index] &&
            <div className='hidden'>
              <p>{topic[Object.keys(topic)[0]]}</p>
            </div>
          }
        </div>
      );
    }));
  }

  handleClick(event) {
    if (!this.state.isClicked[event.target.id]) {
      const copyArr = this.state.isClicked.map(index => false);
      copyArr[event.target.id] = true;
      this.setState({ isClicked: copyArr });
    } else {
      const copyArr = this.state.isClicked.map(index => false);
      this.setState({ isClicked: copyArr });
    }
  }

  render() {
    if (this.state.isClicked[0] === undefined) return;

    return (
      <div className='container'>
        {this.createContent()}
      </div>
    );
  }
}
