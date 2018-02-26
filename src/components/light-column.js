/**
 * Created by maicius on 2018/2/25.
 * 两侧的记分板
 */
'use strict';

require('styles/light.css');

import React from 'react';

class LightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="light-column">
        <div className="score-board">
        </div>
        <div className="score-board">
        </div>
        <div className="score-board">
        </div>
        <div className="score-board">
        </div>
        <div className="score-board">
        </div>
      </div>
    );
  }
}

module.exports = LightColumn;
