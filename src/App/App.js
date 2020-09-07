import React, { Component } from 'react';
import './App.scss';
import StudentsList from './studentList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <StudentsList />
        </body>
      </div>
    );
  }
}

export default App;
