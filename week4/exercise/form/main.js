const form = document.forms['search'];
const [input,button] = form.elements;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => console.log('changed'), false);

// to catch the form before to be submitted
form.addEventListener ('submit', search, false);

function search(event) {
    alert('Form Submitted');
    event.preventDefault();}

input.value ='Search Here';


input.addEventListener('focus', removeValue , false);
input.addEventListener('blur', addValue , false);

function removeValue(){
    if( input.value =='Search Here'){
        input.value = '';
    }
}
function addValue(){
    if( input.value ==''){
        input.value = 'Search Here';
    }
}



//  HERO INPUT


const f = document.forms['hero'];

//f.addEventListener('submit', makeHero, false);

f.addEventListener('submit',validate,false);

function validate(event) {
const firstLetter = f.heroName.value[0];
if (firstLetter.toUpperCase() === 'X') {
    event.preventDefault();
    alert('Your name is not allowed to start with X!');

}
}


function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted
    
    const hero = {}; // create an empty object
    hero.age = f.age.value;
    hero.category = f.category.value;
    hero.city = f.city.value;

    hero.powers = [];
    hero.name = f.heroName.value; // create a name property based on the input field's value
    hero.realName = f.realName.value; // create a name property based on the input field's value
    
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
for (let i=0; i < f.powers.length; i++) {
if (f.powers[i].checked) {
    hero.powers.push(f.powers[i].value);
}
}
    return hero;
    }