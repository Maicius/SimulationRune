/**
 * Created by maicius on 2018/2/26.
 */
import React from 'react';
import LEDNumber from '../components/LED-number'

require('../styles/digit.css');

class DigitNumber extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      digitSegments : [
        [1,2,3,4,5,6],
        [2,3],
        [1,2,7,5,4],
        [1,2,7,3,4],
        [6,7,2,3],
        [1,6,7,3,4],
        [1,6,5,4,3,7],
        [1,2,3],
        [1,2,3,4,5,6,7],
        [1,2,7,3,6]
      ],
      digitNumber: [0, 0, 0, 0, 0]
    }
  }
  updateNumber(){
    const _seconds = document.querySelectorAll('.seconds');
    let digitNumbers = [];
    for(let i =0; i< 5; i++){
      digitNumbers.push(Math.floor(Math.random()*10))
    }
    this.setState(() => ({
      digitNumber: digitNumbers
    }));
    this.setNumber(_seconds[0], this.state.digitNumber[0]);
    this.setNumber(_seconds[1], this.state.digitNumber[1]);
    this.setNumber(_seconds[2], this.state.digitNumber[2]);
    this.setNumber(_seconds[3], this.state.digitNumber[3]);
    this.setNumber(_seconds[4], this.state.digitNumber[4]);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateNumber(), 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setNumber(digit, number){
    const that = this;
    let segments = digit.querySelectorAll('.segment');
    let current = parseInt(digit.getAttribute('data-value'));
    if (!isNaN(current) && current !== number) {
      // unset previous number
      that.state.digitSegments[current].forEach((digitSegment, index) => {
        setTimeout(() => {
          segments[digitSegment-1].classList.remove('on');
        }, index)
      });
    }

    if (isNaN(current) || current !== number) {
      // set new number after
      setTimeout(() => {
        that.state.digitSegments[number].forEach((digitSegment, index) => {
          setTimeout(() => {
            segments[digitSegment-1].classList.add('on');
          }, index)
        });
      }, 50);
      digit.setAttribute('data-value', number);
    }
  }

  render(){
    return(
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
