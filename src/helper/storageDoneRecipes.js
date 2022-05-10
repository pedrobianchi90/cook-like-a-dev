export const KEY_DONE_RECIPES = 'doneRecipes';

if (!JSON.parse(localStorage.getItem(KEY_DONE_RECIPES))) {
  localStorage.setItem(KEY_DONE_RECIPES, JSON.stringify([]));
}

const readDoneRecipe = () => JSON.parse(localStorage.getItem(KEY_DONE_RECIPES));

const saveDoneRecipe = (doneRecipes) => localStorage
  .setItem(KEY_DONE_RECIPES, JSON.stringify(doneRecipes));

export const addRecipe = (recip) => {
  if (recip) {
    const doneRecipes = readDoneRecipe();
    saveDoneRecipe([...doneRecipes, recip]);
  }
};
