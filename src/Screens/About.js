import React, { Component } from 'react';
import { Title } from '../Components';

export class About extends Component {
  render() {
    return (
      <section className={'content-section'}>
        <Title>О тесте</Title>
        <p>Тест по мировоззренческим координатам</p>
      </section>
    );
  }
}