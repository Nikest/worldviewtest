import React, { Component } from 'react';

export class Progress extends Component {
    render() {
        const { colorOne, colorTwo, valueRange, text } = this.props;

        const backgroundScaleStyle = {
            background: colorTwo
        };

        const mainScaleStyle = {
            width: `${100 - (100 / valueRange[0] * valueRange[1])}%`,
            background: colorOne
        };

        return (
            <div>
                <p className={'progress-text'}>{text}:</p>
                <div className={'progress-bar'}>
                    <div className={'progress-bar_view'} style={backgroundScaleStyle}>
                        <div className={'progress-bar_value'} style={mainScaleStyle}/>
                    </div>
                </div>
            </div>
        )
    }
}
