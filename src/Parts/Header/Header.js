import React, { Component } from 'react';
import './Header.css';

import { eventService, store } from '../../Services';

export class Header extends Component {
  state = {
    hasResult: store.getFromStore('result')
  };

  navigations = [
    {
      title: 'О тесте',
      data: {screen: 'about'},
    },
    {
      title: 'Пройти тест',
      data: {screen: 'questionnaire'},
    },
    {
      title: 'Координаты',
      data: {screen: 'diagram'},
    },
    {
      title: 'Токен',
      data: {screen: 'token'},
    },
  ];

  navResult = {
    title: 'Ваш результат',
    data: {screen: 'result'},
  };

  navClick = (nav) => { console.log(nav);
    eventService.emit('navigation.click', nav.data)
  };

  render() {
    return (
      <header className={'header'}>
        <h1 className={'header-title'}>КОСМОШТУРМ <span className={'header-descr'}>Тест мировоззренческих координат</span>
        </h1>

        <nav className={'navigation'}>
          { this.navigations.map((nav, i) => <button key={i} className={'header-nav-button'} onClick={() => { this.navClick(nav) }}>{nav.title}</button>) }
          { this.state.hasResult ?
            <button className={'header-nav-button'} onClick={() => { this.navClick(this.navResult) }}>{this.navResult.title}</button> : ''}
        </nav>
      </header>
    );
  }

  componentDidMount() {
    eventService.listen('result', () => {
      this.setState({
        hasResult: true,
      });
    })
  }
}
