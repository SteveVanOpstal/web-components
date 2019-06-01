import React, { Component } from 'react';
import './LoadImage.css';

class LoadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      src: '',
      srcThumb: '',
      alt: ''
    };
  }

  render() {
    return (
      <div ready={this.state.ready ? '' : undefined}>
        <img src={this.state.srcThumb} alt={this.state.alt} className="thumb"/>
        <img src={this.state.src} alt={this.state.alt} onLoad={() => this.setState({ready: true})}/>
      </div>
    );
  }

  webComponentConstructed(el) {
    if (el.attributes) {
      this.setState(
        {
          src: el.attributes.src ? (el.attributes.src.value || '') : '',
          srcThumb: el.attributes['src-thumb'] ? el.attributes['src-thumb'].value || '' : '',
          alt: el.attributes.alt ? el.attributes.alt.value || '' : ''
        }
      );
    }
  }
}

export default LoadImage;
