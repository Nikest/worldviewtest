import React, { Component } from 'react';
import { Title } from '../Components';
import { questions } from '../questions';

export class TokenResult extends Component {
    ref = React.createRef();
    state = {
        token: 'Скопируйте токен',
        data: []
    };

    updateToken = (e) => {
        this.setState({
            token: e.target.value
        });
    };

    onDecode = () => {
        const token = this.ref.current.value;
        try {
            const tokenData = window.atob(token);
            this.setState({
                data: JSON.parse(tokenData)
            });
        } catch (e) {
            console.log(e)
        }
    };

    render() {
        const { data } = this.state;

        let dataView = null;

        if(data.length > 0) {
            dataView = <div>
                {
                    questions.map((q, i) => {
                        return (
                            <div key={i} className={'question'}>
                                <h2 className={'question-title'}>{i + 1}: {q.title}</h2>
                                {
                                    q.answers.map((a, i) => {
                                        return (
                                            <p key={i} className={'question-text'}>{a.text}</p>
                                        )
                                    })
                                }
                            </div>

                        )
                    })
                }
            </div>
        }

        return (
            <section className={'content-section'}>
                <Title>Расшифровка токена</Title>
                <textarea ref={this.ref} value={this.state.token} onInput={this.updateToken} className={'token-textarea'}/>
                <button onClick={this.onDecode}>Расшифровать</button>
                <br/>
                {
                    data && data.answers && data.answers.length >= 0 && <div>
                        {
                            questions.map((q, i) => {
                                console.log('==========');
                                return (
                                    <div key={i} className={'question'}>
                                        <h2 className={'question-title'}>{i + 1}: {q.title}</h2>
                                        {
                                            q.answers.map((a, j) => {
                                                const hash = a.hash;
                                                let mark = false;

                                                data.answers[i].answers.forEach(da => {
                                                    if(da === hash) {
                                                        mark = true
                                                    }
                                                });

                                                return mark ? (
                                                    <p key={j} className={'question-text'}><b>{a.text}</b></p>
                                                ) : (
                                                    <p key={j} className={'question-text'}>{a.text}</p>
                                                )
                                            })
                                        }
                                    </div>

                                )
                            })
                        }
                    </div>
                }
                
            </section>
        );
    }
}
