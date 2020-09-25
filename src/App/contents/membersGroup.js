/* eslint-disable react/button-has-type */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import EditableTeamName from './editableTeamName';
import '../../style/membersGroup.scss';

class MembersGroup extends Component {
  state = {
    // TODO 这里默认是数组吧
    data: {},
  };

  handleClick = () => {
    const URL = 'http://localhost:8080/membersGroup';
    fetch(URL, {
      method: 'GET',
    })
      .then((Response) => {
        if (Response.ok) {
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
    return (
      <div className="students-group">
        <div className="group-header">
          <h2>分组列表</h2>
          <button className="group-button" onClick={() => this.handleClick()}>
            分组学员
          </button>
        </div>
        {/* TODO data 数组直接map就可以了， Object.keys不是这么用的 */}
        {Object.keys(this.state.data).map((key) => (
          <div className="group" key={key}>
            <EditableTeamName teamName={this.state.data[key].groupName} />
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
