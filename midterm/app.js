import Todo from './Todo.js'
let myTodo = new Todo('#showList','data','#newTask')
let removeId = null


let btn = document.getElementById('btnAdd')
let ul = document.getElementById('showList')
ul.addEventListener('click',(e)=>{
  if(e.target.nodeName == "BUTTON"){
     removeId = e.path[2].id
     myTodo = new Todo('#showList','data','#newTask' , removeId)
     console.log(removeId)
     myTodo.removeTodo()
    }
  })
  



window.addEventListener('load', myTodo.listTodo())

btn.addEventListener('click',()=>{ 
  
  
  myTodo.addTodo()
   
 })
  