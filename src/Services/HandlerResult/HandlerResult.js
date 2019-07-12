import { questions, summaryQuestionsValues } from '../../questions';
import { store, eventService } from '../../Services';

export function HandlerResults(userAnswersData) {
    const data = {answers: userAnswersData};
    const result = {
        acceleration: 0,
        neoluddism: 0,
        elitarism: 0,
        egalitarism: 0
    };

    data.answers.forEach((d, i) => {
        if(questions[i].hash !== d.question) throw new Error('Хеш вопроса не совпадает', d.question, questions[i]);

        d.answers.forEach(ah => questions[i].answers.forEach(a => {
            if(a.hash === ah) {
                result.acceleration += a.acceleration;
                result.neoluddism += a.neoluddism;
                result.elitarism += a.elitarism;
                result.egalitarism += a.egalitarism;
            }
        }));

        data.answers[i].semiResult = result;
    });

    result.liberalism = Math.abs(result.elitarism - result.egalitarism);

    data.result = result;

    const handled = {
        data,
        token: window.btoa(JSON.stringify(data))
    };

    store.setToStore('result', handled);
    eventService.emit('result');
    eventService.emit('navigation.click', {screen: 'result'})

}
