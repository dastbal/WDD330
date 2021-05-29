let data = [];

function readFromLS(key){
    let data = JSON.parse(localStorage.getItem(key));
    return data
    

    }

function writeToLS(key, data){ 
    localStorage.setItem(key,JSON.stringify(data))


}

export { readFromLS , writeToLS}