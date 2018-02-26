/**
 * Created by maicius on 2018/2/25.
 */
'use strict';

require('styles/light.css');
import React from 'react';

class LEDNumber extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="led-number">
        <div className="digit-number" id="led1">
        </div>
        <div className="digit-number"/>
        <div className="digit-number"/>
        <div className="digit-number"/>
        <div className="digit-number"/>
      </div>
    )
  }
}
module.exports = LEDNumber;
