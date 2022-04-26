export const fetchByIngredient = async (ingredients, page) => {
  const INGREDIENTS_URL = page === 'foods' ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredients}`;
  const data = await (await fetch(INGREDIENTS_URL)).json();
  console.log(data);

  return data;
};

export const fetchByName = async (name, page) => {
  const NAME_URL = page === 'foods' ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  const data = await (await fetch(NAME_URL)).json();

  return data;
};

export const fetchFirstLetter = async (letter, page) => {
  const LETTER_URL = page === 'foods' ? `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}` : `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  const data = await (await fetch(LETTER_URL)).json();

  return data;
};

export const filters = {
  inputIngredient: fetchByIngredient,
  inputName: fetchByName,
  inputLetter: fetchFirstLetter,
};
