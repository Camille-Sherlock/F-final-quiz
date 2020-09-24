/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-else-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

class EditableTeamName extends Component {
  state = {
    input: false,
    teamName: this.props.teamName,
    enterKey: 13,
  };

  handleSubmit = (event) => {
    if (event.keyCode === this.state.enterKey) {
      const URL = `http://localhost:8080/team/${this.props.teamName}/${this.state.teamName}`;
      fetch(URL, {
        method: 'Put',
      }).then((Response) => {
        if (Response.ok) {
          this.setState({
            input: false,
            teamName: this.state.teamName,
          });
        } else {
          this.setState({
            input: false,
            teamName: this.props.teamName,
          });
        }
      });
    }
  };

  handleClick = () => {
    this.setState({
      input: true,
    });
  };

  handleChange = () => {
    this.setState({
      teamName: event.target.value,
    });
  };

  render() {
    if (this.state.input) {
      return (
        <input
          className="team-name-input"
          onKeyDown={() => this.handleSubmit}
          value={this.state.teamName}
          onChange={() => this.handleChange()}
        />
      );
    } else {
      return (
        <h3 className="team-name" onClick={() => this.handleClick()}>
          {this.state.teamName}
        </h3>
      );
    }
  }
}

export default EditableTeamName;
