import React, {
  Component
} from 'react';
import './App.scss'
import Timer from './components/Timer';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <div className = "card app-content justify-content-center" >
        <div className = "text-center" >
          <Timer />
          <Todos />
      </div>
     </div>
    );
  }
}

export default App;
