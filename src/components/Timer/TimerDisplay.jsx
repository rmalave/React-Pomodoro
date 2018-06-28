import React from 'react';
import * as timerStates from '../../timer-state';
import Push from 'push.js';

const notify = () => {
  Push.create('Time\'s up! take a break!');
}

const leftPad = (val) => {
  if(val < 10) {
    return `0${val}`;
  }
  return `${val}`;
}

const TimerDisplay = (props) => (
  <div>
    {props.timerState === timerStates.COMPLETE &&
      <div className="row justify-content-center">
        <h2 className="text-center">
          {notify()}
        </h2>
      </div>
    }
    <div className="timer-face row justify-content-center">
      <h2 className="text-center">
        {`
          ${leftPad(props.currentTime.get('hours'))}:
          ${leftPad(props.currentTime.get('minutes'))}:
          ${leftPad(props.currentTime.get('seconds'))}
          `}
      </h2>
    </div>
  </div>
);

export default TimerDisplay;
