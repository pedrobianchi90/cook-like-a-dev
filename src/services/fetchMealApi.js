const MEAL_END_POINT = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

async function fetchMealApi() {
  const limitMeals = 12;
  const response = await fetch(MEAL_END_POINT);
  const data = await response.json();
  return data.meals.slice(0, limitMeals);
}

export default fetchMealApi;
