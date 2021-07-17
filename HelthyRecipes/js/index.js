import {
    saveRecipeLs,
    getRecipesFromLs,
    removeRecipeLs,
    getNutritionById,
    getIngridientsById,
    getInstructionsById ,
    getFavoriteIds,
    saveLastRecipeLs,
    getLastRecipesFromLs } from './Recipe.js'
import { 
    showSearchInput ,
    createFavoriteRecipes, 
    createSearchRecipes, 
    createRecipeDetail } from './RecipeViews.js'


const root = document.getElementById('container')
const containerSearch = document.getElementById('containerSearch')
const favoriteContainer = document.createElement('div')
const nutrition = document.getElementsByClassName('nutrition');
const ingridients = document.getElementsByClassName('ingridients');
const instructions = document.getElementsByClassName('instructions');
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

//
async function getRecipeSearch(){
    const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=c3286084e4694807b2748e3695e0680e&query=';

    const searchInput = document.getElementById('searchInput').value;
    const URL = `${API+searchInput}`
    const response = await fetch(URL);
    const data = await  response.json();
    return data
    
}

function render(element,data,callback){
    callback(element,data);

}

//  this function will render  the html of the serac recipes
function showSearchRecipes(element,dataInfo){
    element.innerHTML = '';
    // save the data from the request
    saveLastRecipeLs(dataInfo);

    // obtain the ids from all favorite recipes saved in localstorage
    const favoriteIds = getFavoriteIds();
    console.log(favoriteIds);
    console.log(getLastRecipesFromLs());

    const recipes = createSearchRecipes(dataInfo,favoriteIds);
    element.appendChild(recipes);

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
async function searchRecipes(e){
    console.log(e)
    e.preventDefault();
    root.innerHTML= `<h3 class='load' > Loading... </h3>`;

    const dataInfo = await getRecipeSearch(); 
    console.log(dataInfo);   
    render(root,dataInfo,showSearchRecipes)

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
function changeText(e){
    const classes = Array.from(e.target.classList)
    if(classes.includes('title') ){
        console.log(' it is the title')
        let titles = document.getElementsByClassName('title');
        titles = Array.from(titles)
        titles.forEach( title=>{
            
            title.classList.remove('hidden')
        }
        
        )
        if (!classes.includes('hidden')){
          
            
            e.target.classList.add('hidden')
        }
    }
}


function listenerRecipeDetail(){
   
    const infos = [ nutrition[0],ingridients[0],instructions[0]];
    console.log(infos)
    infos.forEach(info => {
        info.addEventListener('click' , e=>{
            changeText(e)
        });
    })
    
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
    root.innerHTML = '';
    root.append(recipeDetail);

    // create listener
    let btnBack = document.getElementById('btnBack');
    btnBack.addEventListener('click',goBack )

    listenerRecipeDetail()


}
let form = document.getElementById('search');
form.addEventListener('submit', (e)=>{searchRecipes(e)});



function goBack(){
    const lastRecipes = getLastRecipesFromLs();
    render(root,lastRecipes,showSearchRecipes)
    

}


// const nutrition = await getNutritionById(716426)
// console.log(nutrition)
// const ingridients = await getIngridientsById(716426)
// console.log(ingridients)
// const instru = await getInstructionsById(716426)
// console.log(instru)

