'use strict';

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import LightColumn from '../components/light-column';
import DigitNumber from '../components/digit-number';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mnist_array: []
    };
    this.base_url = '../images/';
  }

  tick() {
    let url_arr = [];
    const random_num = parseInt(9 * Math.random());
    for(let i=0; i< 9; i++) {
      let no_repeat = random_num + i;
      if(no_repeat > 9){
        no_repeat = no_repeat - 9
      }
      const random_num2 = parseInt(9 * Math.random());
      const file_name = no_repeat + '.' + random_num2 + '.jpg';
      const url = this.base_url + no_repeat + '/' + file_name;
      url_arr.push(url)
    }
    this.setState(() => ({
      mnist_array: url_arr
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="rune">
        <DigitNumber/>
        <LightColumn>
        </LightColumn>
        <div className="number">
          <img src={this.state.mnist_array[0]}/>
          <img src={this.state.mnist_array[1]} className="margin-left1"/>
          <img src={this.state.mnist_array[2]} className="margin-left1"/>
          <img src={this.state.mnist_array[3]}/>
          <img src={this.state.mnist_array[4]} className="margin-left1"/>
          <img src={this.state.mnist_array[5]} className="margin-left1"/>
          <img src={this.state.mnist_array[6]}/>
          <img src={this.state.mnist_array[7]} className="margin-left1"/>
          <img src={this.state.mnist_array[8]} className="margin-left1"/>
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
