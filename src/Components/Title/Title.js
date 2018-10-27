import React, { Component } from 'react';
import './Title.css';

export class Title extends Component {
  render() {
    return (
      <h2 className={'title-elem'}>{this.props.children}</h2>
    );
  }
}