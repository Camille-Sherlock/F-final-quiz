import React, { Component } from 'react';
import './App.scss';
import MemberList from './membersList';
import MembersGroup from './membersGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <body>
          <MemberList />
          <MembersGroup/>
        </body>
      </div>
    );
  }
}

export default App;