export const IN_PROGRESS_KEY = 'inProgressRecipes';

export function inicialStorage(id) {
  const receiver = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY));
  if (!receiver || !receiver.cocktails[id]) {
    localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify({
      cocktails: { [id]: [] },
      meals: {},
    }));
  }
}

export const readProgressRecipe = () => JSON.parse(localStorage
  .getItem(IN_PROGRESS_KEY)).cocktails;

export const updateProgressRecipe = (progress) => localStorage
  .setItem(IN_PROGRESS_KEY, JSON.stringify({
    cocktails: progress,
    meals: {},
  }));
