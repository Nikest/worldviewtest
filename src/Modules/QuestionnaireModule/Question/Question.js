import React, { Component } from 'react';

export class Question extends Component {
  input = React.createRef();

  onAnswer = (e) => {
    const { value, onAnswer, onUnanswer } = this.props;
    e.target.checked ? onAnswer(value) : onUnanswer(value);
  };

  render() {
    const { title, type, name } = this.props;
    return (
      <label className={'quection-label'}>
        <input type={type} name={name} onChange={this.onAnswer} />
        <span className={'input-decorator'}/>

        <span className={'input-title'}>{title}</span>
      </label>
    );
  }
}
