/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

// TODO eslint-disable 比较滥用
class AddTrainee extends Component {
  state = {
    input: false,
    inputName: '',
    // TODO 固定值内容不要声明在state内
    enterKey: 13,
  };

  handleSubmit = (event) => {
    if (event.keyCode === this.state.enterKey) {
      // eslint-disable-next-line no-global-assign
      URL = `http://localhost:8080/addMembers/${this.state.inputName}`;
      fetch(URL, {
        method: 'POST',
      }).then((Response) => {
        if (Response.ok) {
          this.props.refresh();
        } else {
          // TODO fetch里面不是这么用的
          Promise.reject();
        }
      });

      this.setState({
        input: false,
        inputName: '',
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
      // eslint-disable-next-line no-restricted-globals
      inputName: event.target.value,
    });
  };

  render() {
    console.log(this.state.inputName);
    if (this.state.input) {
      return (
        <input
          className="student-add-input"
          name="name"
          // TODO 里面不用再写成箭头函数了
          // eslint-disable-next-line no-restricted-globals
          onKeyDown={() => this.handleSubmit(event)}
          value={this.state.inputName}
          onChange={() => this.handleChange()}
        />
      );
      // eslint-disable-next-line no-else-return
    } else {
      return (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <p className="student-add" onClick={() => this.handleClick()}>
          +添加学员
        </p>
      );
    }
  }
}

export default AddTrainee;
