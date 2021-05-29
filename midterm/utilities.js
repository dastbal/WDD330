

function querySelector(selector){
    const element = document.querySelector(selector)
    if (element) return element;
    else return null;

}
// function onClick (elementSelector ,cb){
//     elementSelector.addEventListener('click',cb)

// }


export { querySelector}
