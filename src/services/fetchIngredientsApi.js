const FOOD_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINK_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export async function fetchFoodIngredients() {
  const limitIngredients = 12;
  const response = await fetch(FOOD_INGREDIENT);
  const data = await response.json();
  return data.meals.slice(0, limitIngredients);
}
export async function fetchDrinksIngredients() {
  const limitIngredients = 12;
  const response = await fetch(DRINK_INGREDIENT);
  const data = await response.json();
  return data.drinks.slice(0, limitIngredients);
}
