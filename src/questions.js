export const questions = [
  {
    question: 'Оцените утверждение: "Все люди равны"',
    type: 'answer',
    answers: [
      {
        answer: 'Согласен',
        value: {x: -1},
      },{
        answer: 'Не могу ответить',
        value: {x: 0},
      },{
        answer: 'Не согласен',
        value: {x: 1},
      },
    ],
  },{
    question: 'Отношение к научно-техническому прогрессу',
    type: 'answer',
    answers: [
      {
        answer: 'Положительное',
        value: {y: 1},
      },{
        answer: 'Нейтральное',
        value: {y: 0},
      },{
        answer: 'Отрицательное',
        value: {y: -1},
      },
    ],
  },{
    question: 'Наиболее полезные профессии и призвания',
    type: 'select',
    answers: [
      {
        answer: 'Инженеры и ученные',
        value: {x: 2},
      },{
        answer: 'Деятели культуры',
        value: {x: -1},
      },{
        answer: 'Филантропы',
        value: {x: -2},
      },{
        answer: 'Священнослужители',
        value: {y: -2, x: 1},
      },
    ],
  },{
    question: 'Выберите наиболее желаемый вариант будущего',
    type: 'answer',
    answers: [
      {
        answer: 'Постчеловечество заселяет галактику',
        value: {y: 2},
      },{
        answer: 'Все остается как есть',
        value: {y: 0},
      },{
        answer: 'Люди возвращаются к природе',
        value: {y: -1},
      },
    ],
  }
];

export const summaryQuestionsValues = {
  x: 4,
  y: 4
};

let px = 0;
let mx = 0;
let py = 0;
let my = 0;

questions.forEach(({answers}) => {
  answers.forEach(({value}) => {
    px += value.x > 0 ? value.x : 0;
    mx += value.x < 0 ? value.x : 0;

    py += value.y > 0 ? value.y : 0;
    my += value.y < 0 ? value.y : 0;
  });
});

console.log(`%c ПРОВЕРКА ТЕСТА `, 'background: #c1ffee; color: #000');
console.log(`%c ---------------------------- `, 'background: #c1dcff; color: #000');
console.log(`%c Максимальное значение Х ${px} `, 'background: #c1dcff; color: #000');
console.log(`%c Минимальное значение Х ${mx} `, 'background: #c1dcff; color: #000');
console.log(`%c ---------------------------- `, 'background: #c1dcff; color: #000');
console.log(`%c Максимальное значение Y ${py} `, 'background: #c1dcff; color: #000');
console.log(`%c Минимальное значение Y ${my} `, 'background: #c1dcff; color: #000');