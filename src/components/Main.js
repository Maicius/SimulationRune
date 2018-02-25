require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import LightColumn from '../components/light-column';
import $ from 'jquery';
import LEDNumber from '../components/LED-number';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mnist_array: []
    };
  }

  componentDidMount() {
    $.get('./data/image.json', function (result) {
      this.setState({
        mnist_array: result.mnist_array
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="rune">
        <LEDNumber/>
        <LightColumn>
        </LightColumn>
        <div className="number">
          <img src={this.state.mnist_array.image}/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
          <img src={this.state.mnist_array.image}/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
          <img src={this.state.mnist_array.image}/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
          <img src={this.state.mnist_array.image} className="margin-left1"/>
        </div>
        <div className="margin-left100">
        <LightColumn>
        </LightColumn>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
