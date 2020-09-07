import React, { Component } from 'react';
import './App.scss';
import MemberList from './membersList';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <MemberList />
        </body>
      </div>
    );
  }
}

export default App;