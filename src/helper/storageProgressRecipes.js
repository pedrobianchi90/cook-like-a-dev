export const IN_PROGRESS_KEY = 'inProgressRecipes';

export function inicialStorage(progress) {
  if (progress.idDrink) {
    const receiver = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY));
    if (!receiver || !receiver.cocktails[progress.idDrink]) {
      localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify({
        cocktails: { [progress.idDrink]: [] },
        meals: {},
      }));
    }
  }
  if (progress.idMeal) {
    const receiver = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY));
    if (!receiver || !receiver.meals[progress.idMeal]) {
      localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify({
        cocktails: {},
        meals: { [progress.idMeal]: [] },
      }));
    }
  }
}

export const verifyRecipe = (progress) => {
  if (progress.idMeal) {
    return {
      recipeId: progress.idMeal,
      type: 'meals',
    };
  }
  if (progress.idDrink) {
    return {
      recipeId: progress.idDrink,
      type: 'cocktails',
    };
  }
};

export const readProgressRecipe = () => JSON.parse(localStorage
  .getItem(IN_PROGRESS_KEY));

export const updateProgressRecipe = (progress) => {
  if (progress.cocktails) {
    localStorage
      .setItem(IN_PROGRESS_KEY, JSON.stringify({
        cocktails: progress.cocktails,
        meals: {},
      }));
  }
  if (progress.meals) {
    console.log(progress.cocktails);
    localStorage
      .setItem(IN_PROGRESS_KEY, JSON.stringify({
        cocktails: {},
        meals: progress.meals,
      }));
  }
};
