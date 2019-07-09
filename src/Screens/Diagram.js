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
      x: -90,
      y: 70,
    },{
      text: 'Социал-демократы',
      x: -60,
      y: -15,
    },{
      text: 'Техно-фашизм',
      x: 90,
      y: 90,
    },{
      text: 'Нацисты',
      x: 80,
      y: 0,
    },{
      text: 'Республиканцы',
      x: 15,
      y: -15,
    },{
      text: 'Зеленые',
      x: -90,
      y: -55,
    },{
      text: 'Сингуляристы',
      x: -5,
      y: 90,
    },{
      text: 'Амиши',
      x: 15,
      y: -75,
    },{
      text: 'Марксисты',
      x: -90,
      y: 5,
    },{
      text: 'Меритократия',
      x: 20,
      y: 25,
    },{
      text: 'Анархо-прмитивизм',
      x: -90,
      y: -90,
    },{
      text: 'Либертарианство',
      x: -10,
      y: 5,
    },{
      text: 'Классичский либерализм',
      x: 5,
      y: 8,
    },{
      text: 'Мир "Стар Трека"',
      x: -80,
      y: 75,
    },{
      text: 'Книга "Ложная слепота"',
      x: 70,
      y: 85,
    }
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
