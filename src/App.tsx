import * as React from 'react';
import './App.css';
import Home from './containers/home';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
