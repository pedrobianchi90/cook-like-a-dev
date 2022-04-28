export const fetchMealsIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals);
};

export const fetchMealsFirstLetter = async (firstLetter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.meals);
};

// export const fetchMealId = async (id) => {
//   const endpoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
//   return fetch(endpoint)
//     .then((response) => response.json())
//     .then((data) => data.meals);
// };
