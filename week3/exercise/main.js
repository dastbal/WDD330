
// function doSomething(event){
//         console.log('Something Happened!');
//         console.log(event.type);
//         console.log(event.target);
//         console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)

//         }
    
//     addEventListener('click', doSomething);

    const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );


const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event){
event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);


mouseParagraph.addEventListener('mousemove', () =>  console.log('You Moved!') );

addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => console.log(`${event.key} character`));
addEventListener('touchend', () => console.log('Touch stopped'));

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
console.log('Enjoy this while it lasts!');
onceParagraph.style.backgroundColor = 'pink';
console.log("hahahah")
onceParagraph.removeEventListener('click',remove);
}
         
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );
                