import React, { Component } from 'react';
import LoadImage from './LoadImage';

class App extends Component {
  render() {
    return (
      <LoadImage
        src="http://localhost:3200/react.jpg"
        srcThumb="http://localhost:3200/react-thumb.jpg"
        alt="react">
      </LoadImage>
    );
  }
}

export default App;
