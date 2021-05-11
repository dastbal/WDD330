
function doSomething(event){
        console.log('Something Happened!');
        console.log(event.type);
        }
    
    addEventListener('click', doSomething);