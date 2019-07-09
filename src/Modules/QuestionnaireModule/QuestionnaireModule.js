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
    acceleration: 0,
    neoluddism: 0,
    elitarism: 0,
    egalitarism: 0,
  };

  temp = {
    acceleration: 0,
    neoluddism: 0,
    elitarism: 0,
    egalitarism: 0,
  };

  questionCount = 0;

  onAnswer = (data) => {
    const { question } = this.state;

    if(question.multi) {
      this.temp.acceleration += data.acceleration;
      this.temp.neoluddism += data.neoluddism;
      this.temp.elitarism += data.elitarism;
      this.temp.egalitarism += data.egalitarism;
    } else {
      this.temp.acceleration = data.acceleration;
      this.temp.neoluddism = data.neoluddism;
      this.temp.elitarism = data.elitarism;
      this.temp.egalitarism = data.egalitarism;
    }

    console.log(data);
  };

  onUnanswer = (data) => {

  };

  onNext = () => {
    this.answersValue.acceleration += this.temp.acceleration;
    this.answersValue.neoluddism += this.temp.neoluddism;
    this.answersValue.elitarism += this.temp.elitarism;
    this.answersValue.egalitarism += this.temp.egalitarism;

    console.log('result ',this.answersValue);

    this.questionCount += 1;
    this.questionCount !== questions.length ? this.viewQuestion(this.questionCount) : this.setResult();

    this.temp = {
      acceleration: 0,
      neoluddism: 0,
      elitarism: 0,
      egalitarism: 0,
    }
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
              const val = {
                acceleration: answer.acceleration,
                neoluddism: answer.neoluddism,
                elitarism: answer.elitarism,
                egalitarism: answer.egalitarism,
              };

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
