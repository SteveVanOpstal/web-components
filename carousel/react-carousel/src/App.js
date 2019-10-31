import './App.css';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  prev() {
    let index = this.state.index;
    index += 1;
    index %= 4;
    this.setState({ index });
  }

  next() {
    let index = this.state.index;
    index -= 1;
    if (index < 0) {
      index = 3;
    }
    this.setState({ index });
  }

  srcLink(index) {
    return `http://localhost:3200/assets/${index % 4}.jpg`;
  }

  srcThumbLink(index) {
    return `http://localhost:3200/thumbs/${index % 4}.jpg`;
  }

  render() {
    return (
      <div>
        <div className="actions">
          <button onClick={() => this.prev()}>Prev</button>
          <button onClick={() => this.next()}>Next</button>
        </div>

        <div className="grid">
          <angular-load-image src={this.srcLink(this.state.index)} src-thumb={this.srcThumbLink(this.state.index)} alt="angular">Loading Angular..</angular-load-image>
          <vue-load-image src={this.srcLink(this.state.index + 1)} src-thumb={this.srcThumbLink(this.state.index + 1)} alt="vue">Loading Vue..</vue-load-image>
          <react-load-image src={this.srcLink(this.state.index + 2)} src-thumb={this.srcThumbLink(this.state.index + 2)} alt="react">Loading React..</react-load-image>
          <javascript-load-image src={this.srcLink(this.state.index + 3)} src-thumb={this.srcThumbLink(this.state.index + 3)} alt="javascript">Loading JavaScript..</javascript-load-image>
        </div>
      </div>
    );
  }
}

export default App;
