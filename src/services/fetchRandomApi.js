const RANDOM_FOOD = 'https://www.themealdb.com/api/json/v1/1/random.php';
const RANDOM_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export async function fetchMealRandom() {
  const response = await fetch(RANDOM_FOOD);
  const data = await response.json();
  /* const { idMeal } = data.meals[0]; */
  return data.meals;
}

export async function fetchDrinkRandom() {
  const response = await fetch(RANDOM_DRINK);
  const data = await response.json();
  /* const { idDrink } = data.drinks[0]; */
  return data.drinks;
}
