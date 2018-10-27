import React, { Component } from 'react';
import { WorldviewDiagram } from '../Modules';
import { Title } from '../Components';
import { store } from '../Services/Storage';

export class Result extends Component {
  render() {
    const result = store.getFromStore('result');
    result.text = 'Вы';
    console.log('result', result);
    return (
      <section className={'content-section'}>
        <Title>Ваш результат</Title>
        <WorldviewDiagram values={[result]}/>
      </section>
    );
  }
}