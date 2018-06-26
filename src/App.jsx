import React, {
  Component
} from 'react';
import './App.css'
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
      <div className = "panel panel-default app-content justify-content-center" >
        <div className = "panel text-center" >
          <h1>Pomodoro Timer</h1>
          <Timer />
      </div>
    </div>
    );
  }
}

export default App;
