import React, { Component } from 'react';
// import '../style/studentsGroup.scss';
// import EditableTeamName from './EditableTeamName'

class MembersGroup extends Component {
  state = {
    data: {},
  };

  handleClick = () => {
    URL = 'http://localhost:8080/membersGroup';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.status === 200) {
          return Response.json();
        } else {
          Promise.reject();
        }
      })
      .then((jsonData) => {
        this.setState({
          data: jsonData,
        });
      });
  };

   render() {
       console.log(this.state.data)
    return (
      <div className="students-group">
        <div className="group-header">
          <h2>分组列表</h2>
          <button className="group-button" onClick={() => this.handleClick()}>
            分组学员
          </button>
        </div>
        {Object.keys(this.state.data).map((key) => (
          <div className="group" key={key}>
            {/* <EditableTeamName 
              teamName={this.state.data[key].groupName}
            /> */}

            <div className="students-group-content">
              {Object.keys(this.state.data[key].students).map((childrenKey) => (
                <p
                  className="student"
                  key={`${childrenKey}-group`}
                >{`${this.state.data[key].students[childrenKey].id}.
                         ${this.state.data[key].students[childrenKey].name}`}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MembersGroup;