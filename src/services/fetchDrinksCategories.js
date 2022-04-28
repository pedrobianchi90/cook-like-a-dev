const FILTER_CATEGORY = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';

export async function fetchDrinksCategories() {
  const limitCategories = 5;
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const data = await response.json();
  return data.drinks.slice(0, limitCategories);
}

export async function fetchFilterDrinksCategory(category) {
  const limitDrinks = 12;
  const response = await fetch(`${FILTER_CATEGORY}${category}`);
  const data = await response.json();
  return data.drinks.slice(0, limitDrinks);
}
