import Todo from './Todo.js'

const btn = document.getElementById('btnAdd')

const myTodo = new Todo('#showList','data','#newTask')




window.addEventListener('load',()=>{
    btn.addEventListener('click',myTodo.addTodo())
    
    
  })