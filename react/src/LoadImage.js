import React, { Component } from 'react';
import './LoadImage.css';

class LoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  render() {
    let className = 'thumb';
    if (this.state.ready) {
      className += ' ready';
    }
    return (
      <div>
        <img src={this.props.srcThumb} alt={this.props.alt} className={className}/>
        <img src={this.props.src} alt={this.props.alt} onLoad={() => this.setState({ready: true})}/>
      </div>
    );
  }
}

export default LoadImage;
