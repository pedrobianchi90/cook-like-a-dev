const DRINK_BY_ID = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

async function fetchCocktailById(idDrink) {
  const response = await fetch(`${DRINK_BY_ID}${idDrink}`);
  const data = await response.json();
  console.log(data.drinks[0]);
  return data.drinks[0];
}

export default fetchCocktailById;
