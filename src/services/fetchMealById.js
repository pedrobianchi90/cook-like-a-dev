const MEAL_BY_ID = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

async function fetchMealById(idMeal) {
  const response = await fetch(`${MEAL_BY_ID}${idMeal}`);
  const data = await response.json();
  return data.meals[0];
}

export default fetchMealById;
