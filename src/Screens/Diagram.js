import React, { Component } from 'react';
import { WorldviewDiagram } from '../Modules';
import { Title, Button } from '../Components';

export class Diagram extends Component {
  state = {
    values: false,
  };

  values = [
    {
      data: {
        result: {
          text: 'Проект "Венера"',
          elitarism: 0,
          egalitarism: 16,
          acceleration: 14,
          neoluddism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Социал-демократы',
          acceleration: 0,
          neoluddism: 4,
          elitarism: 0,
          egalitarism: 9,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Техно-фашизм',
          acceleration: 22,
          neoluddism: 0,
          elitarism: 18,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Нацисты',
          acceleration: 3,
          neoluddism: 0,
          elitarism: 16,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Республиканцы',
          acceleration: 0,
          neoluddism: 2,
          elitarism: 5,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Зеленые',
          acceleration: 0,
          neoluddism: 11,
          elitarism: 0,
          egalitarism: 14,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Сингуляристы',
          acceleration: 20,
          neoluddism: 0,
          elitarism: 1,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Амиши',
          acceleration: 0,
          neoluddism: 21,
          elitarism: 5,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Марксисты',
          acceleration: 5,
          neoluddism: 0,
          elitarism: 0,
          egalitarism: 15,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Меритократия',
          acceleration: 9,
          neoluddism: 0,
          elitarism: 7,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Анархо-прмитивизм',
          acceleration: 0,
          neoluddism: 22,
          elitarism: 0,
          egalitarism: 18,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Либертарианство',
          acceleration: 2,
          neoluddism: 0,
          elitarism: 2,
          egalitarism: 0,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Мир "Стар Трека"',
          acceleration: 17,
          neoluddism: 0,
          elitarism: 0,
          egalitarism: 14,
        }
      }
    },
    {
      data: {
        result: {
          text: 'Книга "Ложная слепота"',
          acceleration: 18,
          neoluddism: 0,
          elitarism: 14,
          egalitarism: 0,
        }
      }
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
