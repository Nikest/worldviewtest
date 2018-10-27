import React, { Component } from 'react';
import { QuestionnaireModule } from '../Modules';

export class Questionnaire extends Component {
  render() {
    return (
      <section className={'content-section'}>
        <QuestionnaireModule/>
      </section>
    );
  }
}