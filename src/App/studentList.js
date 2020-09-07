import React, { Component } from 'react';

class studentList extends Component {
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
        console.log(dataJson);
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
    console.log(this.state.data);
    return (
      <div className="student-list">
        <h2>学员列表</h2>
        <div className="student-list-content">
          {Object.keys(this.state.data).map((key) => (
            <p className="student" key={key}>
              {`${this.state.data[key].id}. ${this.state.data.name}`}
            </p>
          ))}
        </div>
      </div>
    );
  }
}
export default studentList;
