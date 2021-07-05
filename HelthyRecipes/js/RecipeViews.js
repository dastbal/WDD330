 const showSearchInput = ()=>{
    const searchInput = document.createElement('form');
    searchInput.id='search';
    searchInput.innerHTML =`
    <button  class="search--header"> Search   <i class="fas fa-search"></i></button>    
        <input placeholder="Search" id="searchInput" type="text" >`
    containerSearch.append(searchInput);
    
}


const createFavoriteRecipes = (favoriteRecipes)=>{
    const favoriteRecipesContainer = document.createElement('div');
    favoriteRecipesContainer.id = 'favoriteRecipes'
    favoriteRecipes.forEach(favoriteRecipe =>{
        const {id,title,image} = favoriteRecipe;
        const favoriteRecipeContainer = document.createElement('div');
        favoriteRecipeContainer.classList.add('favoriteRecipe')
        favoriteRecipeContainer.innerHTML =`
        <button class='removeFavoriteRecipe' id="${id}">x</button>
        <div class="favoriteRecipe--img">
            <img src="${image}" alt="${title}">
        </div>
        <p> ${title}</p>
        `;
        favoriteRecipesContainer.append(favoriteRecipeContainer)

    });
    return favoriteRecipesContainer;

}
const createSearchRecipes = (RecipesSearch)=>{
    const recipes = document.createElement('div');
    recipes.id= 'recipes';
    RecipesSearch.results.forEach(element => {
        const { id, title, image} = element;
        const recipe = document.createElement('div');
        recipe.classList.add('recipe');
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
    return recipes;
}


export { showSearchInput ,createFavoriteRecipes ,createSearchRecipes}