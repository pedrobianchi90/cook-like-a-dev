export const fetchDrinksIngredients = async (ingredient) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchDrinksName = async (name) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.drinks);
};

export const fetchDrinksFirstLetter = async (firstLetter) => {
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.drinks);
};
