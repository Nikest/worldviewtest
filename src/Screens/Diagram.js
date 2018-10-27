import React, { Component } from 'react';
import { WorldviewDiagram } from '../Modules';
import { Title, Button } from '../Components';

export class Diagram extends Component {
  state = {
    values: false,
  };

  values = [
    {
      text: 'Проект "Венера"',
      x: -3,
      y: 3,
    },{
      text: 'Социал-демократы',
      x: -3,
      y: -1,
    },{
      text: 'Техно-фашизм',
      x: 3,
      y: 3,
    },{
      text: 'Нацисты',
      x: 3,
      y: 0,
    },{
      text: 'Республиканцы',
      x: 0,
      y: -0.5,
    },{
      text: 'Зеленые',
      x: -3,
      y: -2.5,
    },{
      text: 'Сингуляристы',
      x: 0,
      y: 3,
    },{
      text: 'Амиши',
      x: 2,
      y: -3.5,
    },{
      text: 'Марксисты',
      x: -3.5,
      y: 0.25,
    },{
      text: 'Меритократия',
      x: 1,
      y: 0.45,
    },
  ];

  viewValues = () => {
    this.setState({
      values: this.state.values ? false : this.values,
    });
  };

  render() {
    return (
      <section className={'content-section'}>
        <h2 className={'content-title'}><Title>Координаты</Title></h2>
        <p>Диаграмма и краткое описание</p>
        <Button onClick={this.viewValues}>{`${!this.state.values ? 'Отобразить' : 'Скрыть'} политические течения и идеологии`}</Button>
        <br/>
        <WorldviewDiagram values={this.state.values}/>
      </section>
    );
  }
}