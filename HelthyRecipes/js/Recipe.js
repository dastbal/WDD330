import {writeToLS, readFromLS} from './ls.js'

async function getNutritionById(id){
    const URLNutrition = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=74fbd4893ddf42fb986637f39f01dc28`;
    const response = await fetch(URLNutrition);
    const data = await  response.json();
    return data
    
}
async function getNameRecipeById(id){
    const URLName = `https://api.spoonacular.com/recipes/${id}/summary?apiKey=74fbd4893ddf42fb986637f39f01dc28`;
    const response = await fetch(URLName);
    let data = await  response.json();
    data =  data.title
    return data
    
}
async function getInstructionsById(id){
    try{
    const URLInstructions = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=74fbd4893ddf42fb986637f39f01dc28`;
    const response = await fetch(URLInstructions);
    const data = await  response.json();
    return data
    }catch{
        return null;
    }
    
}
async function getIngridientsById(id){
    try{

        const URLIngridients = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=74fbd4893ddf42fb986637f39f01dc28`;
        const response = await fetch(URLIngridients);
        const data = await  response.json();
        return data;
    }catch{
        return null;
    }
    
}


function getRecipesFromLs(){
    const favoriteRecipes = readFromLS("favoriteRecipes");
    return favoriteRecipes;
    
}

//get favorite Ids from localstorage
function getFavoriteIds(){
    const favoriteRecipes = getRecipesFromLs();
    const ids = [];
    favoriteRecipes.forEach(favoriteRecipe=>{
        ids.push(favoriteRecipe.id)

    })
    return ids
}

function saveRecipeLs(newRecipe, favoriteId){
    const ids = getFavoriteIds();
    const favoriteRecipes =getRecipesFromLs();
    // if the new favoritwe recipe is saved   wiil not be saved again  ( I wanted to use includes but it was not working ?? so I decided to use this)
    const isEmpty = ids.filter(id=> id ==favoriteId )
    
    if(isEmpty.length != 0){
        console.log('Esta repetido')

    }else{
        console.log('NO  esta repetido')
        
        // recieve all the recipes so   this filter the recipes by the id to save the choosen recipe
        newRecipe.results.forEach(element => {
            const { id, title, image} = element;
            if(id == favoriteId){
                
                const favoriteRecipe ={
                    id:id,
                    title:title,
                    image:image,
                }
                favoriteRecipes.push(favoriteRecipe)
            }
            
        });
        writeToLS("favoriteRecipes",favoriteRecipes);
    }
}

function removeRecipeLs(favorite){
    const favoriteRecipes =getRecipesFromLs();
    const removed = favoriteRecipes.filter( element => {
        const { id} = element;
         return id != favorite
    });
writeToLS("favoriteRecipes",removed);
}

//   function to save the las resquest to be render if client click button goback
function getLastRecipesFromLs(){
    const lastRecipes = readFromLS("lastRecipes");
    return lastRecipes; 
}
function saveLastRecipeLs(recipes){
    // the last request is override in the localStore so I do not  need remove it
    writeToLS("lastRecipes",recipes);
}


export {saveRecipeLs,
    getRecipesFromLs,
    removeRecipeLs,
    getNutritionById ,
    getIngridientsById,
    getInstructionsById,
    saveLastRecipeLs,
    getLastRecipesFromLs ,
    getFavoriteIds,
    getNameRecipeById,
}