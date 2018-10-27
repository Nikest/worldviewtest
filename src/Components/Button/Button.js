import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    return (
      <button className={'button-elem'} onClick={this.props.onClick}>{this.props.children}</button>
    );
  }
}