const FOOD_INGREDIENT = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
const DRINK_INGREDIENT = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
const MEAL_NATIONALITIES_END_POINT = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const ALL_MEAL_NATIONALITIES_END_POINT = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';
const ALL_MEAL_END_POINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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
export async function fetchMealNationalities() {
  const response = await fetch(MEAL_NATIONALITIES_END_POINT);
  const data = await response.json();
  return data.meals;
}

export async function fetchAllMealNationalities(nationalities) {
  const response = await fetch(`${ALL_MEAL_NATIONALITIES_END_POINT}${nationalities}`);
  const data = await response.json();
  return data.meals;
}

export async function fetchAllMealApi() {
  const response = await fetch(ALL_MEAL_END_POINT);
  const data = await response.json();
  return data.meals;
}
