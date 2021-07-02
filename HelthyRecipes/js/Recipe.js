import {writeToLS, readFromLS} from './ls.js'



function getRecipesFromLs(){
    const favoriteRecipes = readFromLS();
    return favoriteRecipes;

}


function saveRecipeLs(newRecipe, favorite){
    const favoriteRecipes =getRecipesFromLs();
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

export {saveRecipeLs,getRecipesFromLs,removeRecipeLs}