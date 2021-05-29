import {writeToLS, readFromLS} from './ls.js'
import { onClick , querySelector } from './utilities.js'

export default class Todo{
    constructor(Id, key , inputId ){
        this.rootElement =  querySelector(Id); 
        this.inputId =  querySelector(inputId); 
        this.key = key;
    }
    addTodo(){
        let task = this.inputId.value;
        saveTodo(task,this.key);
        this.listTodo();
        

        
// call queryselector() , saveTodo(value,this.obj) then  listTodo()
// It should grab the 
// input in the html where users enter the text of the task, 
//then send that along with the key to a SaveTodo() function.
// Then update the display with the current list of tasks
     

    }
    listTodo(){
        // show all the task
        //   getTodo(this.key)
        renderTodoList(getTodo(this.key),this.rootElement);

    }
    completeTodo(){
        // when I check

    }
    removeTodo(){

    }
    filterTodo(){
        // to show completed or actived tasl

    }

}
let listTask = null;
function saveTodo (task,key){
    // in : value from the input and name of the key to storege the data
    let newTask ={}
    let list;
    newTask.id =Date().now();
    newTask.content = task;
    newTask.completed= false;
    list = getTodo(key).push(newTask);
    
    writeToLS(key,list);
    
}
function getTodo (key){
    if (listTask == null ){
        listTask = readFromLS(key)
    }
    return listTask

    
}
function renderTodoList (list, element){
    list.forEach( task => {
        const oneList = createOneList(task)
        element.appendChild(oneList)
        
    });

}

function createOneList(task){
    let li = document.createElement('li')
    let checkBox = document.createElement('input[type="checkbox"]')
    let label = document.createElement('label')
    let btn = document.createElement('buttom')


    checkBox.setAttribute('id',task.id)
    btn.innerHTML = 'x'


// to strike the text if  the task is completed 
    if(task.completed){
        let strike = document.createElement('strike')
        strike.textContent =task.content
        label.appendChild(strike)

    }else{

        label.textContent= task.content
    }
    label.appendChild(btn)
    li.append(checkBox,label)

    return li


    

}