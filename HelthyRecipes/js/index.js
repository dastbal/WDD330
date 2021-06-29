const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=74fbd4893ddf42fb986637f39f01dc28&query=';

const root = document.getElementById('container')


const showSearchInput = ()=>{
    const searchInput = document.createElement('div');
    searchInput.id='search';
    searchInput.innerHTML =`
    <div class="search--header">
    <p>Search</p>
    <button><i class="fas fa-search"></i>
    
    </button>
    </div>
    <input placeholder="Search" id="searchInput" type="text" >`
    root.append(searchInput)
    
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
async function showSearchRecipes(){
    const recipes = document.createElement('div')
    recipes.classList.add('recipes')
    const json = await getRecipeSearch('chocolate');
    json.results.forEach(element => {
        const { id, title, image} = element;
        const recipe = document.createElement('div')
        recipe.classList.add('recipe')
        recipe.innerHTML =` <div id='${id}' class="recipe--img">
        <img src="${image}" alt="${title}">
    </div>
    <div class="recipe--container">
        <p>${title}</p>
        <button><i class="fas fa-heart"></i></button>
    </div>`;
    recipes.appendChild(recipe)


        
    });
    root.appendChild(recipes)



}

showSearchRecipes()