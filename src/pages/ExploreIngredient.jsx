import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import RecipeContext from '../context/RecipeContext';
import ExploreFoodsIngredients from '../components/ExploreFoodsIngredients';
import ExploreDinksIngredients from '../components/ExploreDrinksIngredients';
import {
  fetchMealsIngredient,
} from '../helper/fetchMeal';
import {
  fetchDrinksIngredients,
} from '../helper/fetchDinks';

function ExploreIngredient() {
  const location = useLocation();
  const history = useHistory();
  const MAX = 12;
  const {
    ingredientMealName,
    setIngredientMealName,
    ingredientDrinkName,
    setIngredientDrinkName,
    setFoodsData,
    setDrinksData,
  } = useContext(RecipeContext);
  useEffect(() => {
    const redirectToFoods = async () => {
      if (ingredientMealName !== '') {
        const output = await fetchMealsIngredient(ingredientMealName);
        setFoodsData(output.slice(0, MAX));
        if (output !== '') {
          history.push('/foods');
          setIngredientMealName('');
        }
      }
    };
    redirectToFoods();
  }, [ingredientMealName]);

  useEffect(() => {
    const redirectToDrinks = async () => {
      if (ingredientDrinkName !== '') {
        const output = await fetchDrinksIngredients(ingredientDrinkName);
        setDrinksData(output.slice(0, MAX));
        if (output !== '') {
          history.push('/drinks');
          setIngredientDrinkName('');
        }
      }
    };
    redirectToDrinks();
  }, [ingredientDrinkName]);

  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
      </header>
      {location.pathname === '/explore/foods/ingredients'
        ? (
          <ExploreFoodsIngredients />
        )
        : (
          <ExploreDinksIngredients />
        )}
      <Footer />
    </div>
  );
}

export default ExploreIngredient;
