import React, { Component } from 'react';
import TimerDisplay from './TimerDisplay';
import TimerConfig from './TimerConfig';
import TimerButton from './TimerButton';
import moment from 'moment';
import * as timerStates from '../timer-state';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment.duration(25, 'minutes'),
      startTime: moment.duration(25, 'minutes'),
      timerState: timerStates.NOT_SET,
      timer: null
    }
  }

  setStartTime = (startTime) => {
    this.setState({
      currentTime: startTime,
      startTime
     })
  }

  startTimer = () => {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTime, 1000)
    })
  }

  stopTimer = () => {
    if(this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.startTime)
    })
  }

  reduceTime = () => {
    if(this.state.currentTime.get('hours') === 0 &&
      this.state.currentTime.get('minutes') === 0 &&
      this.state.currentTime.get('seconds') === 0) {
        this.completeTimer();
        return;
    }
    const currentTime = moment.duration(this.state.currentTime);
    currentTime.subtract(1, 'second');

    this.setState({ currentTime })
  }

  completeTimer = () => {
    if(this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null
    })
  }

  render() {
    return (
      <div>
        <TimerDisplay
          currentTime={this.state.currentTime}
          timerState={this.state.timerState}
          />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
          />
        {this.state.timerState !== timerStates.RUNNING &&
            <TimerConfig
              startTime={this.state.startTime}
              setStartTime={this.setStartTime}
              startTimer={this.startTimer}
              />
        }
      </div>
    )
  }
}

export default Timer;
