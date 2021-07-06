import {writeToLS, readFromLS} from './ls.js'

async function getNutritionById(id){
    const URLNutrition = `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=c3286084e4694807b2748e3695e0680e`;
    const response = await fetch(URLNutrition);
    const data = await  response.json();
    return data
    
}
async function getInstructionsById(id){
    const URLInstructions = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=c3286084e4694807b2748e3695e0680e`;
    const response = await fetch(URLInstructions);
    const data = await  response.json();
    return data
    
}
async function getIngridientsById(id){
    const URLIngridients = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=c3286084e4694807b2748e3695e0680e`;
    const response = await fetch(URLIngridients);
    const data = await  response.json();
    return data
    
}


function getRecipesFromLs(){
    const favoriteRecipes = readFromLS();
    return favoriteRecipes;

}


function saveRecipeLs(newRecipe, favorite){
    const favoriteRecipes =getRecipesFromLs();
    // recieve all the recipes so   this filter the recipes by the id to save the choosen recipe
    newRecipe.results.forEach(element => {
        const { id, title, image} = element;
        if(id == favorite){

            const favoriteRecipe ={
                id:id,
                title:title,
                image:image,
            }
            favoriteRecipes.push(favoriteRecipe)
        }
        
    });
    writeToLS(favoriteRecipes);
}



function removeRecipeLs(favorite){
    const favoriteRecipes =getRecipesFromLs();
    const removed = favoriteRecipes.filter( element => {
        const { id} = element;
         return id != favorite
    });
writeToLS(removed);
}

export {saveRecipeLs,getRecipesFromLs,removeRecipeLs,getNutritionById ,getIngridientsById,getInstructionsById}