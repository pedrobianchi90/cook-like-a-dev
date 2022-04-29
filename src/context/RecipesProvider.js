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
} from '../services/fetchIngredientsApi';

function RecipesProvider({ children }) {
  const [filter, setFilter] = useState({ bool: false, name: 'All' });
  const [drinksData, setDrinksData] = useState('');
  const [foodsData, setFoodsData] = useState([]);
  const [meals, setMeals] = useState([]);
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
  const [searchInputs, setSearchInputs] = useState('');

  async function getMeals() {
    const mealsResponse = await fetchMealApi();
    setMeals([...mealsResponse]);
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

  useEffect(() => {
    getDrinks();
    getDrinksCategories();
    getMeals();
    getMealCategories();
    getRandomFood();
    getRandomDrink();
    getFoodIngredient();
    getDrinkIngredient();
  }, []);

  const store = {
    drinksData,
    setDrinksData,
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
    searchInputs,
    setSearchInputs,
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
