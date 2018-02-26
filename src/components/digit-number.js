/**
 * Created by maicius on 2018/2/26.
 * 顶部的LED数字逻辑控制
 */
import React from 'react';
import LEDNumber from '../components/LED-number'

require('../styles/digit.css');

class DigitNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digitSegments: [
        [1, 2, 3, 4, 5, 6],
        [2, 3],
        [1, 2, 7, 5, 4],
        [1, 2, 7, 3, 4],
        [6, 7, 2, 3],
        [1, 6, 7, 3, 4],
        [1, 6, 5, 4, 3, 7],
        [1, 2, 3],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 7, 3, 6]
      ],
      digitNumber: [8, 8, 8, 8, 8]
    }
  }

  updateNumber() {
    const _seconds = document.querySelectorAll('.seconds');
    let digitNumbers = [];
    for (let i = 0; i < 5; i++) {
      //避免出现0
      digitNumbers.push(Math.floor(Math.random() * 9) + 1)
    }
    this.setState(() => ({
      digitNumber: digitNumbers
    }));
    for (let i = 0; i < 5; i++) {
      this.setNumber(_seconds[i], this.state.digitNumber[i]);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateNumber(), 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setNumber(digit, number) {
    const that = this;
    let segments = digit.querySelectorAll('.segment');
    let current = parseInt(digit.getAttribute('data-value'));
    if (!isNaN(current) && current !== number) {
      // unset previous number
      that.state.digitSegments[current].forEach((digitSegment, index) => {
        setTimeout(() => {
          segments[digitSegment - 1].classList.remove('on');
        }, index)
      });
    }

    if (isNaN(current) || current !== number) {
      // set new number after
      setTimeout(() => {
        that.state.digitSegments[number].forEach((digitSegment, index) => {
          setTimeout(() => {
            segments[digitSegment - 1].classList.add('on');
          }, index)
        });
      }, 50);
      digit.setAttribute('data-value', number);
    }
  }

  render() {
    return (
      <div className="led-number">
        <LEDNumber/>
        <LEDNumber/>
        <LEDNumber/>
        <LEDNumber/>
        <LEDNumber/>
      </div>
    )
  }
}

module.exports = DigitNumber;
