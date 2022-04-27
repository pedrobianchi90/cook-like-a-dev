const MEALS_CATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const FILTER_CATEGORY = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

export async function fetchMealCategories() {
  const limitCategories = 5;
  const response = await fetch(MEALS_CATEGORIES);
  const data = await response.json();
  return data.meals.slice(0, limitCategories);
}

export async function fetchFilterCategory(category) {
  const limitMeals = 12;
  const response = await fetch(`${FILTER_CATEGORY}${category}`);
  const data = await response.json();
  return data.meals.slice(0, limitMeals);
}
