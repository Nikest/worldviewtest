import React, { Component } from 'react';
import './WorldviewDiagram.css';

import { summaryQuestionsValues } from '../../questions';

export class WorldviewDiagram extends Component {
  canvas = React.createRef();
  canvasWidth = 1000;
  canvasHeight = 1000;
  fontSize = 19;

  render() { console.log(summaryQuestionsValues.x);
    return (
      <article className={'worldview-diagram'}>
        <canvas ref={this.canvas} width={this.canvasWidth} height={this.canvasHeight} className={'main-canvas'}/>
      </article>
    );
  }

  sections = [
    {
      title: 'Технопрогрессивизм',
      color: [189, 212, 249],
      x: 0,
      y: 0,
    },{
      title: 'Технократия',
      color: [216, 201, 242],
      x: 1,
      y: 0,
    },{
      title: 'Универсализм',
      color: [234, 241, 200],
      x: 0,
      y: 1,
    },{
      title: 'Консерватизм',
      color: [239, 214, 199],
      x: 1,
      y: 1,
    },
  ];

  axesTitle = {
    top: 'Акселлерация',
    right: 'Элитаризм',
    bottom: 'Неолуддизм',
    left: 'Эгалитаризм',
  };

  reDraw = () => {
    const context = this.canvas.current.getContext('2d');
    const semiSize = this.canvasWidth / 2;

    this.sections.forEach((section) => {
      const bgColor = `rgb(${section.color.map(c => c).join(',')})`;
      const textColor = `rgb(${section.color.map(c => c - 60).join(',')})`;

      context.fillStyle = bgColor;
      context.fillRect(section.x * semiSize, section.y * semiSize, semiSize, semiSize);

      context.font = `${this.fontSize + 6}px Ubuntu`;
      context.fillStyle = textColor;
      context.textAlign = 'center';
      context.fillText(section.title, (section.x * semiSize) + (semiSize / 2), (section.y * semiSize) + (semiSize / 2));
    });

    context.font = `${this.fontSize}px Montserrat`;
    context.fillStyle = '#000000';

    context.textAlign = 'center';
    context.fillText(this.axesTitle.top, semiSize, this.fontSize + 5);

    context.textAlign = 'end';
    context.fillText(this.axesTitle.right, (semiSize * 2) - 5, semiSize - (this.fontSize / 2));

    context.textAlign = 'center';
    context.fillText(this.axesTitle.bottom, semiSize, (semiSize * 2) - (this.fontSize - 5));

    context.textAlign = 'start';
    context.fillText(this.axesTitle.left, 5, semiSize + this.fontSize);

    if (this.props.values) {
      this.props.values.forEach(value => {
        this.drawValue(value, context, semiSize);
      });
    }
  };

  componentDidMount() {
    this.reDraw();
  }

  drawValue = (value, context, sSize) => {
    const semiSize = sSize - 5;
    const aX = summaryQuestionsValues.x * 2;
    const rX = value.x + summaryQuestionsValues.x;

    const aY = summaryQuestionsValues.y * 2;
    const rY = value.y + summaryQuestionsValues.y;

    const cX = (semiSize * 2) - ((semiSize * 2) / aX) * (aX - rX);
    const cY = ((semiSize * 2) / aY) * (aY - rY);

    context.fillStyle = '#53446a';
    context.fillRect(cX, cY, 10, 10);
    context.font = `${this.fontSize - 3}px Ubuntu`;
    context.textAlign = 'center';
    context.fillText(value.text, cX, cY - (this.fontSize - 3));
  };

  componentDidUpdate() {
    this.reDraw();
  }
}
