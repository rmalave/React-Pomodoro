import React, { Component } from 'react';

class TimerConfig extends Component {
  handleChange = e => {
    const startTime = this.props.startTime;

    if(e.target.id === 'hours') {
      startTime.subtract(this.props.startTime.get('hours'), 'hours').add(parseInt(e.target.value, 10), 'hours');
    }

    if(e.target.id === 'minutes') {
      startTime.subtract(this.props.startTime.get('minutes'), 'minutes').add(parseInt(e.target.value, 10), 'minutes');
    }

    if(e.target.id === 'seconds') {
      startTime.subtract(this.props.startTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');
    }

    this.props.setStartTime(startTime)
  }

  render() {
    return (
      <div className="card-body">
        <div className="container-fluid">
        <div >
          <div className="form-group">
            <div>
              <label htmlFor="hours">Hours</label>
              <input onChange={this.handleChange} id="hours" name="hours" className="form-control" type="number" defaultValue={this.props.startTime.get('hours')}/>
            </div>
          </div>
          <div className="form-group">
            <div className = "col-sm-12" >
              <label htmlFor="minutes">Minutes</label>
              <input onChange={this.handleChange} id="minutes" name="minutes" className="form-control" type="number" defaultValue={this.props.startTime.get('minutes')}/>
            </div>
          </div>
          <div className="form-group">
            <div className = "col-sm-12" >
              <label htmlFor="seconds">Seconds</label>
              <input onChange={this.handleChange} id="seconds" name="seconds" className="form-control" type="number" defaultValue={this.props.startTime.get('seconds')}/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
};

export default TimerConfig;
