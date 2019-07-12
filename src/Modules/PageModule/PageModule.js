import React, { Component } from 'react';
import { Header, Footer, Main } from '../../Parts';
import { About, Questionnaire, Diagram, Result, TokenResult } from '../../Screens';

export class PageModule extends Component {
  render() {
    const { viewData } = this.props;

    let screen = '';

    switch (viewData) {
      case 'about':
        screen = <About/>;
        break;
      case 'questionnaire':
        screen = <Questionnaire/>;
        break;
      case 'diagram':
        screen = <Diagram/>;
        break;
      case 'token':
        screen = <TokenResult/>;
        break;
      case 'result':
        screen = <Result/>;
        break;
      default:
        screen = <span>no content</span>;
    }
    console.log(screen, viewData);
    return (
      <React.Fragment>
        <Header/>

        <Main>{screen}</Main>

        <Footer/>
      </React.Fragment>
    );
  }
}
