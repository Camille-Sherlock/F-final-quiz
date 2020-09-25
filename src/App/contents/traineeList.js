import React, { Component } from 'react';
import AddTrainee from './addTrainee';
import '../../style/membersList.scss';

class TraineeList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    data: [],
  };

  componentDidMount = () => {
    fetch('http://localhost:8080/members')
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.status === 200) {
          return data.json();
        }
      })
      .then((dataJson) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          data: dataJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleGetMembers = () => {
    fetch('http://localhost:8080/members')
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.status.ok) {
          return data.json();
        }
      })
      .then((dataJson) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          data: dataJson,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="student-list">
        <h2>学员列表</h2>
        <div className="students-list-content">
          {/* TODO 直接使用map */}
          {Object.keys(this.state.data).map((key) => (
            <p className="student" key={key}>
              {`${this.state.data[key].id}. ${this.state.data[key].name}`}
            </p>
          ))}
          <AddTrainee refresh={() => this.handleGetMembers()} />
        </div>
      </div>
    );
  }
}
export default TraineeList;
