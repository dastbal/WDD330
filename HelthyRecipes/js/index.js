import {saveRecipeLs,getRecipesFromLs,removeRecipeLs} from './Recipe.js'
import { showSearchInput ,createFavoriteRecipes} from './RecipeViews.js'

const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=74fbd4893ddf42fb986637f39f01dc28&query=';
const instructions = 'https://api.spoonacular.com/recipes/{id}/analyzedInstructions?apiKey=74fbd4893ddf42fb986637f39f01dc28';
const nutrition = 'https://api.spoonacular.com/recipes/{id}/nutritionWidget.json?apiKey=74fbd4893ddf42fb986637f39f01dc28';
const ingridients = ' https://api.spoonacular.com/recipes/{id}/ingredientWidget.json?apiKey=74fbd4893ddf42fb986637f39f01dc28';

const root = document.getElementById('container')
const containerSearch = document.getElementById('containerSearch')
const favoriteContainer = document.createElement('div')
favoriteContainer.classList.add('favoriteRecipes')


window.addEventListener('load',showSearchInput)
window.addEventListener('load',showFavoriteRecipes)



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
    recipes.id= 'recipes'
    const info = recipesInfo;
    info.results.forEach(element => {
        const { id, title, image} = element;
        const recipe = document.createElement('div')
        recipe.classList.add('recipe')
        recipe.innerHTML =` 
        <div  class="recipe--img">
        <img src="${image}" alt="${title}">
        </div>
        <div class="recipe--container">
        <p>${title}</p>
        <button  class='btnFavorite'  ><i id='${id}'  class="fas fa-heart"></i></button>
        </div>`;
        recipes.appendChild(recipe);
        

        
    });
    root.appendChild(recipes);
}


// show Favorite recipes

async function showFavoriteRecipes(){
    favoriteContainer.innerHTML= '';
    favoriteContainer.innerHTML= '<h2>Favorite Recipes</h2>';
    const favoriterecipesInfo =  getRecipesFromLs();

    // this   help do not  reate  nothing if the favorite recipes  array is empty
    if( favoriterecipesInfo.length != 0){

        const recipesCreated = createFavoriteRecipes(favoriterecipesInfo);
        favoriteContainer.append(recipesCreated);
        containerSearch.insertAdjacentElement('beforebegin',favoriteContainer)
    }
    
}



// this make a request and then call the  function to show the recipes
async function searchRecipes(e){
    e.preventDefault();
    root.innerHTML= `<h3 class='load' > Loading... </h3>`;
    const dataInfo = await getRecipeSearch();
    console.log(data);
    showSearchRecipes(dataInfo);
    
    // add listener to add favorite
    favoriteListener(dataInfo);
    
    
    
    
    
    
}

///  add listerner to the button to obtain the id and call the function to save the favorit recipe

function favoriteListener(recipes){
    let btnFavorite = document.getElementsByClassName('btnFavorite');
    btnFavorite = Array.from(btnFavorite)
    console.log(btnFavorite)
    
    btnFavorite.forEach(btn =>{
    btn.addEventListener('click',e=>addFavoriteRecipe(recipes, e))
})

}



// this is the callback to the listener to save the favorite recipe
function addFavoriteRecipe(dataInfo, event){
    
    const id = event.target.id;
    saveRecipeLs(dataInfo,id);
    console.log(getRecipesFromLs());
    console.log(event);
    // obtain the button and add the class to change the color
    event.path[1].classList.toggle('favorite');

    showFavoriteRecipes()
    
    
    
    
    
}





let form = document.getElementById('search');
form.addEventListener('submit', e =>{searchRecipes(e)});



