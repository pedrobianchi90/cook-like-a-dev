const COCKTAIL_END_PONT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

async function fetchCocktailApi() {
  const limitDrinks = 12;
  const response = await fetch(COCKTAIL_END_PONT);
  const data = await response.json();
  return data.drinks.slice(0, limitDrinks);
}

export default fetchCocktailApi;
