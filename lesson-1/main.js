// @flow

/*
<div>
  <h1>Hello</h1>
  <h2>EasyCode</h2>
</div>

*/
// Добавить тэг h2 + EasyCode

const Tree = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello'),
  React.createElement('h2', null, 'EasyCode')
);

const showSomething = someString =>
  React.createElement('h1', null, someString);

ReactDOM.render(
  showSomething('Angular'),
  document.querySelector('.app')
);

const helloWorld = React.createElement('h1', null, 'Hello world');

// Напишите функцию, которая будет принмать 1 аргумент строку
// возвращать реакт компонент и в зависимости от того,
// что передали будет отображать в DOM

// createElement
/*
1 - название тэга который нужно сделать - string
2 - props,
...
Последний - 3 - children... или другие элементы, или строка или массив


*/

// реакт-компонент
// куда-именно мы будем рендерить
