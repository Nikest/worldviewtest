import React, { Component } from 'react';
import './QuestionnaireModule.css';

import { questions } from '../../questions';
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

  onAnswer = (data) => {
    this.answersValue.x += data.x ? data.x : 0;
    this.answersValue.y += data.y ? data.y : 0;
    console.log(this.answersValue);
  };

  onUnanswer = (data) => {
    this.answersValue.x -= data.x ? data.x : 0;
    this.answersValue.y -= data.y ? data.y : 0;
    console.log(this.answersValue);
  };

  onNext = () => {
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
            <Title>{question.question}</Title>

            {question.answers.map((answer, i) => {
              return <Question
                key={i + this.questionCount * 1000}
                name={`answer-${this.questionCount}`}
                onAnswer={this.onAnswer}
                onUnanswer={this.onUnanswer}
                title={answer.answer}
                value={answer.value}
                type={question.type === 'answer' ? 'radio' : 'checkbox'}/>
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
  }

  componentDidMount() {
    this.viewQuestion(this.questionCount)
  }
}