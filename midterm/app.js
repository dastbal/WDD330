import Todo from './Todo.js'

const btn = document.getElementById('btnAdd')

const myTodo = new Todo('showList','data','newTask')


btn.addEventListener('click', myTodo.addTodo())