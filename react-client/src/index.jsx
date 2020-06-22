import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemImages: null
    }
  }

  componentDidMount () {
    console.log('Item id', this.props.itemId)
    $.ajax ({
      url: "/itemImage/" + this.props.itemId,
      type: "get",
      success: (data) => {
        console.log('Data returned form the server', data.itemImages);
        this.setState({
          itemImages: data.itemImages
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.itemImages && <Gallery itemImages={this.state.itemImages}/>}
      </div>
    );
  }
}

let itemId = '100';
ReactDOM.render(<App itemId={itemId}/>, document.getElementById('gallery'));
