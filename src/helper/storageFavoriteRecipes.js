const FAVORITE_RECIPE_KEY = 'favoriteRecipes';

if (!JSON.parse(localStorage.getItem(FAVORITE_RECIPE_KEY))) {
  localStorage.setItem(FAVORITE_RECIPE_KEY, JSON.stringify([]));
}
const readFavoriteRecipe = () => JSON.parse(localStorage.getItem(FAVORITE_RECIPE_KEY));

const saveFavoriteRecipe = (favoriteSongs) => localStorage
  .setItem(FAVORITE_RECIPE_KEY, JSON.stringify(favoriteSongs));

export const addRecipe = (recipe) => {
  if (recipe) {
    const favoriterecipes = readFavoriteRecipe();
    saveFavoriteRecipe([...favoriterecipes, recipe]);
  }
};

export const removeRecipe = (recipe) => {
  const favoriteSongs = readFavoriteRecipe();
  saveFavoriteRecipe(favoriteSongs.filter(({ id }) => id !== recipe.id));
};
