import React, { Component } from 'react';
import './QuestionnaireModule.css';
import { HandlerResults } from '../../Services';
import { questions } from '../../questions';
import { Button, Title } from '../../Components';
import { AnswerView } from './AnswerView';

export class QuestionnaireModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    }
  }

  userAnswersData = [];
  questionCount = 0;
  currentAnswers = [];

  userAnswerDataUpdate = (questionHash, i, answers) => {
    this.userAnswersData[i] = {
      question: questionHash,
      answers: answers
    }
  };

  addAnswerResult = (answer) => {
    this.currentAnswers.push(answer.hash);
  };

  removeAnswerResult = (answer) => {
    this.currentAnswers = this.currentAnswers.filter(a => a.hash !== answer.hash);
  };

  onAnswer = (answer) => {
    if(this.state.question.multi) {
      this.addAnswerResult(answer);
    } else {
      if(this.currentAnswers.length > 0) this.removeAnswerResult({hash: this.currentAnswers[0].hash});
      this.addAnswerResult(answer);
    }
  };

  onUnanswer = (answer) => {
    this.removeAnswerResult(answer);
  };

  onNext = () => {
    this.userAnswerDataUpdate(this.state.question.hash, this.questionCount, this.currentAnswers);

    if((this.questionCount + 1) === questions.length) {
      this.setResult();
      return;
    }

    this.questionCount += 1;
    this.viewQuestion(this.questionCount);
    this.currentAnswers = [];
  };

  setResult = () => {
    HandlerResults(this.userAnswersData);
  };

  arrayRandomize = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];

      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    const { question } = this.state;
    const buttonNextText = this.questionCount === questions.length - 1 ? 'Результат' : 'Далее';
    if(!question) return null;
    const answersArray = this.questionCount > 3 ? this.arrayRandomize(question.answers) : question.answers;
    return (
      <article className={'questionnaire-module'}>
        <aside className={'questionnaire-module-main'}>
          { question && <div>
            <Title>{`Вопрос ${(this.questionCount + 1)} из ${questions.length}:`} <br/> {question.title}</Title>

            {
              answersArray.map((answer, i) => {
                const val = {
                  hash: answer.hash,
                  acceleration: answer.acceleration,
                  neoluddism: answer.neoluddism,
                  elitarism: answer.elitarism,
                  egalitarism: answer.egalitarism,
                };

                return <AnswerView
                  key={i + this.questionCount * 1000}
                  name={`answer-${this.questionCount}`}
                  onAnswer={this.onAnswer}
                  onUnanswer={this.onUnanswer}
                  title={answer.text}
                  value={val}
                  type={question.multi ? 'checkbox' : 'radio' }/>
              })
            }
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
