import React, { Component } from 'react';

import { summaryQuestionsValues } from '../questions';
import { WorldviewDiagram } from '../Modules';
import { Title, Progress } from '../Components';
import { store } from '../Services/Storage';

export class Result extends Component {
  render() {
    const result = store.getFromStore('result');
    result.data.result.text = 'Вы';

    return (
      <section className={'content-section'}>
        <Title>Ваш результат:</Title>
        <WorldviewDiagram values={[result]}/>
        <br/>

        <Title>Дополнительные шкалы:</Title>
        <Progress text={'Либерализм - Авторитаризм'} colorOne={'#80a2e3'} colorTwo={'#6d4444'} valueRange={[summaryQuestionsValues.x, result.data.result.liberalism]}/>
        <br/>

        <p>Токен результата:</p>
        <textarea className={'token-textarea'} value={result.token}>{result.token}</textarea>
      </section>
    );
  }
}
