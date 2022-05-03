const FAVORITE_RECIPE_KEY = 'favoriteRecipes';

if (!JSON.parse(localStorage.getItem(FAVORITE_RECIPE_KEY))) {
  localStorage.setItem(FAVORITE_RECIPE_KEY, JSON.stringify([]));
}
const readFavoriteRecipe = () => JSON.parse(localStorage.getItem(FAVORITE_RECIPE_KEY));

const saveFavoriteRecipe = (favoriteRecipes) => localStorage
  .setItem(FAVORITE_RECIPE_KEY, JSON.stringify(favoriteRecipes));

export const addRecipe = (recipe) => {
  if (recipe) {
    const favoriterecipes = readFavoriteRecipe();
    saveFavoriteRecipe([...favoriterecipes, recipe]);
  }
};

export const removeRecipe = (recipe) => {
  const favoriteRecipes = readFavoriteRecipe();
  saveFavoriteRecipe(favoriteRecipes.filter(({ id }) => id !== recipe.id));
};
