import React, { Component } from 'react';
import './App.css';
import { PageModule } from '../Modules';
import { eventService } from '../Services';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewData: 'ready'
    }
  }

  render() {
    return (
      <React.Fragment>
        <PageModule viewData={this.state.viewData}/>
      </React.Fragment>
    );
  }

  componentDidMount() {
    eventService.listen('navigation.click', (e) => {
      this.setState({
        viewData: e.sendData.screen
      });
    })
  }
}