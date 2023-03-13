import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import Foods from '../pages/Foods';
// import Login from '../pages/Login';
// import Explore from '../pages/Explore';
// import Details from '../pages/Details';
// import FoodProgress from '../pages/FoodProgress';
// import Drinks from '../pages/Drinks';
// import ExploreIngredient from '../pages/ExploreIngredient';
// import Nationalites from '../pages/Nationalites';
// import Profile from '../pages/Profile';
// import DoneRecipe from '../pages/DoneRecipe';
import FavoriteRecipe from '../pages/FavoriteRecipe';

const profileBtn = 'profile-top-btn';
const pageTitle = 'page-title';
const filterByAll = 'filter-by-all-btn';
const filterByFood = 'filter-by-food-btn';
const filterByDrink = 'filter-by-drink-btn';

describe.only('Testa página Favorites', () => {
  it('60 - Testa os elementos presentes na tela de Favorite', () => {
    renderWithRouter(<FavoriteRecipe />);
    const profile = screen.getByTestId(profileBtn);
    expect(profile).toBeInTheDocument();
    const title = screen.getByTestId(pageTitle);
    expect(title).toBeInTheDocument();
    const all = screen.getByTestId(filterByAll);
    expect(all).toBeInTheDocument();
    const food = screen.getByTestId(filterByFood);
    expect(food).toBeInTheDocument();
    const drink = screen.getByTestId(filterByDrink);
    expect(drink).toBeInTheDocument();
  });
  it('61 - Testa se renderiza o card com todos os atributos ', async () => {
    renderWithRouter(<Foods />);
    await waitForElement(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 5000 },
    );
    const imageFirstMeal = screen.getByTestId('0-card-img');
    expect(imageFirstMeal).toBeInTheDocument();
    userEvent.click(imageFirstMeal);
    // const shareBtn = screen.getByTestId('share-btn');
    // userEvent.click(shareBtn);
  });
});
