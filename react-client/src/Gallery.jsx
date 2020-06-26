import React from 'react';
import { findDOMNode } from 'react-dom';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.element = null
    this.width = null
    this.height = null
    this.left = null
    this.top = null
    this.state = {
      currentImage: this.props.itemImages[0].medium,
      x: null,
      y: null
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  onImageClick (image) {
    this.setState({
      currentImage: image.medium
    });
  }

  handleMouseEnter(e) {
    let event = e.nativeEvent.offsetX;
    console.log('onMouseEnter', e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  handleMouseMove(e){
    console.log(
      'onMouseMove',
      e.nativeEvent.offsetX, e.nativeEvent.offsetY
    )
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }

  handleMouseLeave(e) {
    this.setState({ x: null, y: null });
  }

  render() {
    return (
      <div>
        <p>Kate</p>
        <img src={this.state.currentImage} onMouseEnter={this.handleMouseEnter} onMouseMove={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}/>
        <div id="preview"></div>
        {this.props.itemImages.map((image) =>
            <img src={image.small} onClick={()=> this.onImageClick(image)}/>
        )}
      </div>
    );
  }

}

export default Gallery;
