import React from 'react';
import styled from 'styled-components';

import styles from './LoadImage.css';


const Image = styled.img`
  width: 400px;
  height: 300px;
`

const Thumb = styled.img`
  position: absolute;
  width: 400px;
  height: 300px;
  opacity: ${props => props.ready ? 0 : 1};
  transition: opacity .5s;
`

class LoadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.src !== prevProps.src) {
      this.setState({ ready: false });
    }
  }

  render() {
    return (
      <div class={styles['load-image']}>
        <Thumb src={this.props.srcThumb} alt={this.props.alt} className="thumb" ready={this.state.ready}></Thumb>
        <Image src={this.props.src} alt={this.props.alt} onLoad={() => this.setState({ ready: true })}></Image>
      </div>
    );
  }
}

export default LoadImage;
