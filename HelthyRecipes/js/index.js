import {saveRecipeLs,getRecipesFromLs,removeRecipeLs,getNutritionById,getIngridientsById,getInstructionsById} from './Recipe.js'
import { showSearchInput ,createFavoriteRecipes, createSearchRecipes, createRecipeDetail} from './RecipeViews.js'


const root = document.getElementById('container')
const containerSearch = document.getElementById('containerSearch')
const favoriteContainer = document.createElement('div')
favoriteContainer.classList.add('favoriteRecipes')


window.addEventListener('load',showSearchInput)
window.addEventListener('load',showFavoriteRecipes)



async function getJSON(){
    const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=c3286084e4694807b2748e3695e0680e&query=';

    const response = await fetch(API);
    const data = await  response.json();
    return data
    
}
const data = await getJSON();
console.log(data)

//
async function getRecipeSearch(){
    const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=c3286084e4694807b2748e3695e0680e&query=';

    const searchInput = document.getElementById('searchInput').value;
    const URL = `${API+searchInput}`
    const response = await fetch(URL);
    const data = await  response.json();
    return data
    
}
//  this function will render  the html of the serac recipes
async function showSearchRecipes(){
    root.innerHTML = ''
    const dataInfo = await getRecipeSearch();
    const recipes = createSearchRecipes(dataInfo);
    root.appendChild(recipes);

    let seeDetails = document.getElementsByClassName('details');
    seeDetails = Array.from(seeDetails)
    seeDetails.forEach(seeDetail=>{

        seeDetail.addEventListener('click',e =>{showRecipeDetail(e)})
    })
    

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
    // adding the event  loistener to remove the recipe
    removeFavoriteListener()    
}
// this make a request and then call the  function to show the recipes
function searchRecipes(e){
    console.log(e)
    e.preventDefault();
    root.innerHTML= `<h3 class='load' > Loading... </h3>`;
    // const dataInfo = await getRecipeSearch();
    showSearchRecipes();
    // add listener to add favorite
    addFavoriteListener();    
}
///  add listerner to the button to obtain the id and call the function to save the favorit recipe
async function addFavoriteListener(){
    const dataInfo = await getRecipeSearch();
    let btnFavorite = document.getElementsByClassName('btnFavorite');
    btnFavorite = Array.from(btnFavorite)
    console.log(btnFavorite)    
    btnFavorite.forEach(btn =>{
    btn.addEventListener('click',e=>addFavoriteRecipe(dataInfo, e))
})
}
///  add event listener to the button that remove a recipe from favorite recipe

function removeFavoriteListener(){
    let btnRemoveFavorite = document.getElementsByClassName('removeFavoriteRecipe');
    btnRemoveFavorite = Array.from(btnRemoveFavorite)
    
    btnRemoveFavorite.forEach(btn =>{
    btn.addEventListener('click',(e)=>{removeFavoriteRecipe(e)})
})
}
// this is the callback to the listener to save the favorite recipe
function addFavoriteRecipe(dataInfo, event){
    
    const id = event.path[3].id;
    saveRecipeLs(dataInfo,id);
    console.log(getRecipesFromLs());
    console.log(event);
    console.log(id);
    // obtain the button and add the class to change the color
    event.path[1].classList.toggle('favorite');
    // each time that a recipe is added   it is show the new list again
    showFavoriteRecipes()
}
//  this callback remove a favorite recipe clocked
function removeFavoriteRecipe(event){   
    const id = event.target.id;
    removeRecipeLs(id);
    // render again new info
    showFavoriteRecipes()
}


async function showRecipeDetail(event){
    const id = event.path[2].id;
    const nutrition = await getNutritionById(id);
    console.log(nutrition);
    const ingridients = await getIngridientsById(id);
    console.log(ingridients);
    const instrutions = await getInstructionsById(id);
    console.log(instrutions);
    const recipeDetail = createRecipeDetail(id,nutrition,ingridients,instrutions);
    root.append(recipeDetail);

}
let form = document.getElementById('search');
form.addEventListener('submit', e =>{searchRecipes(e)});

const nutrition = await getNutritionById(716426)
console.log(nutrition)
const ingridients = await getIngridientsById(716426)
console.log(ingridients)
const instru = await getInstructionsById(716426)
console.log(instru)

