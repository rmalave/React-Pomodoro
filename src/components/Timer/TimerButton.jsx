import React, { Component } from 'react';
import * as timerStates from '../../timer-state';

class TimerButton extends Component {
  getButton = () => {
    if(this.props.timerState === timerStates.NOT_SET) {
      return <button id="timer-button" className="btn btn-success" onClick={this.props.startTimer}>Start</button>
    }

    if(this.props.timerState === timerStates.RUNNING) {
      return <button id="timer-button" className="btn btn-danger" onClick={this.props.stopTimer}>Stop</button>
    }

    if(this.props.timerState === timerStates.COMPLETE) {
      return <button id="timer-button" className="btn btn-info" onClick={this.props.stopTimer}>Reset</button>
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        {this.getButton()}
      </div>
    )
  }
}

export default TimerButton;
