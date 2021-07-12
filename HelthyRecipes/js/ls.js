

function readFromLS(key){
    let data = JSON.parse(localStorage.getItem(key));
    if (data==null){
        data = []
        return data
    }
    
    return data
    }

function writeToLS( key,data){ 
    localStorage.setItem(key,JSON.stringify(data))


}


export { readFromLS , writeToLS }