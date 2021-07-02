

function readFromLS(){
    let data = JSON.parse(localStorage.getItem('data'));
    if (data==null){
        data = []
        return data
    }
    
    return data
    }

function writeToLS( data){ 
    localStorage.setItem('data',JSON.stringify(data))


}


export { readFromLS , writeToLS }