/**
 * Created by maicius on 2018/2/25.
 * 顶部的LED数字样式
 */
'use strict';

import React from 'react';
class LEDNumber extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="digit seconds">
        <div className="segment"/>
        <div className="segment"/>
        <div className="segment"/>
        <div className="segment"/>
        <div className="segment"/>
        <div className="segment"/>
        <div className="segment"/>
      </div>
    )
  }
}
module.exports = LEDNumber;
