const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=74fbd4893ddf42fb986637f39f01dc28&query=';

const root = document.getElementById('container')
const containerSearch = document.getElementById('containerSearch')


const showSearchInput = ()=>{
    const searchInput = document.createElement('form');
    searchInput.id='search';
    searchInput.innerHTML =`
    <button  class="search--header"> Search   <i class="fas fa-search"></i></button>    
        <input placeholder="Search" id="searchInput" type="text" >`
    containerSearch.append(searchInput);
    
}
window.addEventListener('load',showSearchInput)


async function getJSON(){
    const response = await fetch(API);
    const data = await  response.json();
    return data
    
}
const data = await getJSON();
console.log(data)

//
async function getRecipeSearch(){
    const searchInput = document.getElementById('searchInput').value;
    const URL = `${API+searchInput}`
    const response = await fetch(URL);
    const data = await  response.json();
    return data

}


//  this function will render  the html of the serac recipes
function showSearchRecipes(recipesInfo){
    root.innerHTML = ''
    const recipes = document.createElement('div')
    recipes.classList.add('recipes')
    const info = recipesInfo;
    info.results.forEach(element => {
        const { id, title, image} = element;
        const recipe = document.createElement('div')
        recipe.classList.add('recipe')
        recipe.innerHTML =` 
        <div id='${id}' class="recipe--img">
            <img src="${image}" alt="${title}">
        </div>
        <div class="recipe--container">
            <p>${title}</p>
            <button><i class="fas fa-heart"></i></button>
        </div>`;
    recipes.appendChild(recipe);


        
    });
    root.appendChild(recipes);
}

async function searchRecipes(e){
    e.preventDefault();
    root.innerHTML= `<h3 class='load' > Loading... </h3>`;
    const dataInfo = await getRecipeSearch();
    console.log(data);
    showSearchRecipes(dataInfo);
    

}

let form = document.getElementById('search');
form.addEventListener('submit', e =>{searchRecipes(e)});

