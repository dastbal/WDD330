import {writeToLS, readFromLS} from './ls.js'
import {querySelector} from './utilities.js'

export default class Todo{
    constructor(Id, key , inputId , removeId){
        this.rootElement =  querySelector(Id); 
        this.inputId =  querySelector(inputId); 
        this.key = key;
        this.removeId = removeId;
    }
    addTodo(){
        let task = this.inputId.value        
        console.log(task)
        console.log(this.removeId)
        saveTodo(task , this.key);
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
     removeTodo(){
        console.log(this.removeId)
        console.log(getTodo(this.key))
        
        // call the list
        listTask = getTodo(this.key)
        // find the index to delete from the dataç
        let index = listTask.findIndex(  (task) =>
            
            
            task.id == this.removeId
            )
        
        console.log(index)

       listTask.splice(index,1)


        console.log(getTodo(this.key))


        // save the new list
        writeToLS(this.key,listTask)
        // render again
        this.listTodo()
        
    

    }
    //completeTodo(){
      //  document.body.addEventListener("click", event => {
        //    if (event.target.nodeName == "BUTTON") {
          //    console.log("Clicked", event.target.textContent);
            //}
         //
        // });


   // }
     
    // filterTodo(){
    //     // to show completed or actived tasl

    // }
    
}


let listTask = null;




function saveTodo (task,key){
    // in : value from the input and name of the key to storege the data
    let newTask ={}
    let list;
    let time = new Date().getTime()
    newTask.id = time
    newTask.content = task;
    newTask.completed= false;
    list = getTodo(key)
    list.push(newTask);
    
    writeToLS(key,list);
    console.log(list)
    
    
}



function getTodo(key){
    if (listTask == null ){
        listTask = readFromLS(key)
    }
    return listTask

    
}




function renderTodoList (list, element){
    element.innerHTML =''
    list.forEach( task => {
        const oneList = createOneList(task)
        element.appendChild(oneList)
        
    });

}




function createOneList(task){
    let li = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    let btn = document.createElement('button')


    li.setAttribute('id',task.id)
    checkBox.setAttribute('type','checkbox')
    checkBox.setAttribute('class','checked')
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