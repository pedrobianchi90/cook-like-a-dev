import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './RecipeContext';
import fetchMealApi from '../services/fetchMealApi';
import fetchCocktailApi from '../services/fetchCocktailApi';
import {
  fetchMealCategories,
  fetchFilterCategory,
} from '../services/fetchMealCategories';
import {
  fetchDrinksCategories,
  fetchFilterDrinksCategory,
} from '../services/fetchDrinksCategories';

import {
  fetchDrinkRandom,
  fetchMealRandom,
} from '../services/fetchRandomApi';

import {
  fetchFoodIngredients,
  fetchDrinksIngredients,
  fetchMealNationalities,
} from '../services/fetchIngredientsNationalitiesApi';

function RecipesProvider({ children }) {
  const [filter, setFilter] = useState({ bool: false, name: 'All' });
  const [drinksData, setDrinksData] = useState('');
  const [foodsData, setFoodsData] = useState([]);
  const [meals, setMeals] = useState([]);
  const [backup, setBackup] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [mealCategories, setMealCategories] = useState();
  const [filterMealCategory, setFilterMealCategory] = useState([]);
  const [drinksCategories, setDrinksCategories] = useState();
  const [filterDrinkCategory, setFilterDrinkCategory] = useState([]);
  const [mealRandom, setMealRandom] = useState([]);
  const [drinkRandom, setDrinkRandom] = useState([]);
  const [searchInputs, setSearchInputs] = useState('');
  const [mealIngredients, setMealIngredients] = useState([]);
  const [drinksIngredients, setDrinkIngredients] = useState([]);
  const [ingredientMealName, setIngredientMealName] = useState('');
  const [ingredientDrinkName, setIngredientDrinkName] = useState('');

  const [nationalities, setNationalities] = useState([]);

  async function getMeals() {
    const mealsResponse = await fetchMealApi();
    setMeals([...mealsResponse]);
    setBackup([...mealsResponse]);
  }

  async function getDrinks() {
    const cocktailsReponse = await fetchCocktailApi();
    setDrinks([...cocktailsReponse]);
  }

  async function getMealCategories() {
    const categoriesResponse = await fetchMealCategories();
    setMealCategories(categoriesResponse);
  }

  async function getFilterMealCategory(mealCategory) {
    const mealFilterResponse = await fetchFilterCategory(mealCategory);
    setFilterMealCategory([...mealFilterResponse]);
  }

  async function getDrinksCategories() {
    const drinksCategoriesResponse = await fetchDrinksCategories();
    setDrinksCategories(drinksCategoriesResponse);
  }

  async function getFilterDrinkCategory(drinkCategory) {
    const drinkFilterResponse = await fetchFilterDrinksCategory(drinkCategory);
    setFilterDrinkCategory([...drinkFilterResponse]);
  }

  function getFilter({ bool, name }) {
    setFilter({ bool, name });
  }

  async function getRandomFood() {
    const foodResponse = await fetchMealRandom();
    setMealRandom([...foodResponse]);
  }

  async function getRandomDrink() {
    const drinkResponse = await fetchDrinkRandom();
    setDrinkRandom([...drinkResponse]);
  }

  async function getFoodIngredient() {
    const foodIngredientsResponse = await fetchFoodIngredients();
    setMealIngredients([...foodIngredientsResponse]);
  }

  async function getDrinkIngredient() {
    const drinkIngredientsResponse = await fetchDrinksIngredients();
    setDrinkIngredients([...drinkIngredientsResponse]);
  }

  async function getNationalities() {
    const nationalitiesResponse = await fetchMealNationalities();
    setNationalities([...nationalitiesResponse]);
  }

  useEffect(() => {
    getDrinks();
    getDrinksCategories();
    getMeals();
    getMealCategories();
    getRandomFood();
    getRandomDrink();
    getFoodIngredient();
    getDrinkIngredient();
    getNationalities();
    localStorage.setItem('doneRecipes', JSON.stringify([{
      id: '0',
      type: 'Food',
      nationality: 'Japanese',
      category: 'Seafood',
      alcoholicOrNot: '',
      name: 'Sushi',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/5031e263a4a258791d6306b2d3d9dbf6_XL.jpg',
      doneDate: '12/03/2022',
      tags: ['karate', 'kung-fu'],
    },
    {
      id: '1',
      type: 'Drink',
      nationality: '',
      category: '',
      alcoholicOrNot: 'Alcoholic',
      name: 'Negroni',
      image: 'https://feedmechannel.com/wp-content/uploads/2019/06/receita-de-negroni-1280x1024.jpg',
      doneDate: '12/03/2022',
      tags: [],
    }]));
  }, []);

  const store = {
    backup,
    drinksData,
    setDrinksData,
    setMeals,
    setDrinks,
    foodsData,
    setFoodsData,
    meals,
    drinks,
    mealCategories,
    getMealCategories,
    filter,
    getFilter,
    filterMealCategory,
    getFilterMealCategory,
    drinksCategories,
    filterDrinkCategory,
    getFilterDrinkCategory,
    mealRandom,
    drinkRandom,
    searchInputs,
    setSearchInputs,
    mealIngredients,
    drinksIngredients,
    ingredientMealName,
    setIngredientMealName,
    ingredientDrinkName,
    setIngredientDrinkName,
    nationalities,
    setNationalities,
  };

  return (
    <myContext.Provider
      value={ store }
    >
      {children}
    </myContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.node,
}.isRequised;

export default RecipesProvider;
