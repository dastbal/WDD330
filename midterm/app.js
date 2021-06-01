import Todo from './Todo.js'
let myTodo = new Todo('#showList','data','#newTask')
let Id = null


let btn = document.getElementById('btnAdd')
let ul = document.getElementById('showList')
let input = document.getElementById('newTask')


input.addEventListener('focus', removeValue , false);

function removeValue(){
    if( input.value !=''){
        input.value = '';
    }
}




ul.addEventListener('click',(e)=>{
  if(e.target.nodeName === "BUTTON"){
    console.log(e.target)
    Id = e.path[2].id
    
    myTodo = new Todo('#showList','data','#newTask' , Id)
    myTodo.removeTodo()
  }else if(e.target.nodeName === "INPUT"){
    Id = e.path[1].id
    console.log(e.target)
      
      myTodo = new Todo('#showList','data','#newTask' , Id)
      myTodo.completeTodo()
    }



  } )
  



window.addEventListener('load', myTodo.listTodo())

btn.addEventListener('click',()=>{ 
  
  
  myTodo.addTodo()
   
 })
  