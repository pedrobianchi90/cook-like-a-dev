import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { BiFoodMenu } from 'react-icons/bi';
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
import '../style/HeaderStyle.css';

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
  }, [ingredientMealName, history, setFoodsData, setIngredientMealName]);

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
  }, [history, ingredientDrinkName, setDrinksData, setIngredientDrinkName]);

  return (
    <div>
      {location.pathname === '/explore/foods/ingredients'
        ? (
          <div>
            <header className="header-container">
              <Link to="/profile">
                <button type="button" className="icons-header">
                  <img
                    src={ profileIcon }
                    alt="logo-profile"
                    data-testid="profile-top-btn"
                  />
                </button>
              </Link>
              <h2 data-testid="page-title">Explore Ingredients</h2>
              <BiFoodMenu className="icons-header" size="48px" />
            </header>
            <ExploreFoodsIngredients />
          </div>
        )
        : (
          <div>
            <header className="header-container">
              <Link to="/profile">
                <button type="button" className="icons-header">
                  <img
                    src={ profileIcon }
                    alt="logo-profile"
                    data-testid="profile-top-btn"
                  />
                </button>
              </Link>
              <h2 data-testid="page-title">Explore Ingredients</h2>
              <BiFoodMenu className="icons-header" size="48px" />
            </header>
            <ExploreDinksIngredients />
          </div>
        )}
      <Footer />
    </div>
  );
}

export default ExploreIngredient;
