const endpointFood = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const endpointDrink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const foodById = async (id) => {
  if (!id) console.log('informe um id');
  const response = await fetch(`${endpointFood}${id}`);
  const data = await response.json();
  return data.meals;
};

export const drinkById = async (id) => {
  if (!id) console.log('informe um id');
  const response = await fetch(`${endpointDrink}${id}`);
  const data = await response.json();
  return data.drinks;
};
