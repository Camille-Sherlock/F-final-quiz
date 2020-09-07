import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    data: '',
    // eslint-disable-next-line react/no-unused-state
    studentList: '',
  };

  componentDidMount() {
    fetch('http://localhost:8080/members')
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        }
      })
      .then((dataJson) => {
        console.log(dataJson);
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          studentList: dataJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    const param = {
      name: 'admin',
    };
    fetch('http://localhost:8080/add-members', { method: 'POST', body: JSON.stringify(param) })
      // eslint-disable-next-line consistent-return
      .then()
      .catch((error) => {
        console.log(error);
      });
  }
  // eslint-disable-next-line class-methods-use-this

  render() {
    return (
      <div data-testid="app" className="App">
        Hello World git
      </div>
    );
  }
}

export default App;
