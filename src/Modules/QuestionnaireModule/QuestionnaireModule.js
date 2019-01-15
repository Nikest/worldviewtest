import React, { Component } from 'react';
import './QuestionnaireModule.css';

import { questions } from '../../questions';
//import questions from '../../d'
import { Button, Title } from '../../Components';
import { Question } from './Question';

import { store, eventService } from '../../Services';

export class QuestionnaireModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    }
  }

  answersValue = {
    x: 0,
    y: 0,
  };

  questionCount = 0;

  temp = {
    x: 0,
    y: 0,
  };

  onAnswer = (data) => {
    this.temp.x = data.x;
    this.temp.y = data.y;
    console.log(this.temp);
  };

  shift = (b) => {
    let a = this.answersValue.x;
    b = parseInt(b);
    if (Number.isNaN(b)) return a;
    a = (a === 0) ? b : a;
    return Math.round((a + b) / 2)
  };

  onUnanswer = (data) => {

  };

  onNext = () => {
    this.answersValue.x = this.shift(this.temp.x);
    this.answersValue.y = this.shift(this.temp.y);
    console.log('result: ', this.answersValue);
    this.questionCount += 1;
    this.questionCount !== questions.length ? this.viewQuestion(this.questionCount) : this.setResult();
  };

  setResult = () => {
    store.setToStore('result', this.answersValue);
    eventService.emit('result');
    eventService.emit('navigation.click', {screen: 'result'})
  };

  render() {
    const { question } = this.state;
    const buttonNextText = this.questionCount === questions.length - 1 ? 'Результат' : 'Далее';
    return (
      <article className={'questionnaire-module'}>
        <aside className={'questionnaire-module-main'}>
          { question && <div>
            <Title>{question.title}</Title>

            {question.answers.map((answer, i) => {
              const val = {x: answer.x, y: answer.y};
              return <Question
                key={i + this.questionCount * 1000}
                name={`answer-${this.questionCount}`}
                onAnswer={this.onAnswer}
                onUnanswer={this.onUnanswer}
                title={answer.text}
                value={val}
                type={question.multi ? 'checkbox' : 'radio' }/>
            })}
          </div> }
        </aside>
        <aside className={'questionnaire-module-footer'}>
          <Button onClick={this.onNext}>{buttonNextText}</Button>
        </aside>
      </article>
    );
  }

  viewQuestion = (count) => {
    this.setState({
      question: questions[count],
    });
  };

  componentDidMount() {
    this.viewQuestion(this.questionCount)
  }
}
