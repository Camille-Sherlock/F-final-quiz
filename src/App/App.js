import React, { Component } from 'react';
import './App.scss';
import TraineeList from './contents/traineeList';
import TrainerList from './contents/trainerList';
import MembersGroup from './contents/membersGroup';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO 不要使用body标签，不应该用在这 */}
        {/* TODO 总的来说可以多用点语义化标签 */}
        <body>
          <MembersGroup />
          <TrainerList />
          <TraineeList />
        </body>
      </div>
    );
  }
}

export default App;
