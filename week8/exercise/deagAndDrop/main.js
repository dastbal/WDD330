const draggableElements = document.querySelectorAll('.draggable')
const droppableElements = document.querySelectorAll('.droppable')


draggableElements.forEach( elem=>{
    elem.addEventListener('dragstart', dragStart)
    //elem.addEventListener('drag', drag)
    //elem.addEventListener('dragend', dragEnd)
})

droppableElements.forEach( elem=>{
    elem.addEventListener('drop', drop)
    elem.addEventListener('dragover', dragOver)
    //elem.addEventListener('drag', drag)
    //elem.addEventListener('dragend', dragEnd)
})
function dragStart(e){
    console.log(e)
    // tp catch the color
    //e.dataTransfer.setData('text',e.target.style.color);
    e.dataTransfer.setData('text',e.target.id);

}
function drop(e){
    e.preventDefault();
    const draggableElementData = e.dataTransfer.getData('text')
    // I am targeting the id that I set in the data-draggable-id in the  container
    const droppableElementData = e.target.getAttribute('data-draggable-id')
    

    if( draggableElementData == droppableElementData){
        // class to add the style whrn have been dropped
        e.target.classList.add('dropped');
        //  to obtain  the picture font with the id  from draggableElementData
        const draggableElement= document.getElementById(draggableElementData);
        // class to add the style when have been dragged the element
        draggableElement.classList.add('dragged');
        // to turn it dont draggable
        draggableElement.setAttribute('draggable',false);
        // add img to the container  adding the name of the id the match with the name of the tag i
        e.target.insertAdjacentHTML('afterbegin', ` <i class="fas fa-${draggableElementData}"></i>`)

    }
    //to set the color to the div element
    //e.target.style.backgroundColor = draggableElementData
    

}
function dragOver(e){
    e.preventDefault();

}