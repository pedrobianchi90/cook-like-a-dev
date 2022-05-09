import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';

const testIdEmail = 'profile-email';
const testIdDoneBtn = 'profile-done-btn';
const testIdFavBtn = 'profile-favorite-btn';
const testIdLogoutBtn = 'profile-logout-btn';

const getProfile = () => {
  const emailInput = screen.getByTestId(testIdEmail);
  const doneBtn = screen.getByTestId(testIdDoneBtn);
  const favBtn = screen.getByTestId(testIdFavBtn);
  const logoutBtn = screen.getByTestId(testIdLogoutBtn);
  expect(emailInput).toBeInTheDocument();
  expect(doneBtn).toBeInTheDocument();
  expect(favBtn).toBeInTheDocument();
  expect(logoutBtn).toBeInTheDocument();
};

const getExplore = () => {
  const drinkBtn = screen.getByRole('button', { name: /done recipes/i });
  const exploreBtn = screen.getByRole('button', { name: /favorite recipes/i });
  const foodBtn = screen.getByRole('button', { name: /logout/i });
  expect(drinkBtn).toBeInTheDocument();
  expect(exploreBtn).toBeInTheDocument();
  expect(foodBtn).toBeInTheDocument();
};

describe('Testa página Profile', () => {
  it('82 - Testa os elementos presentes na tela de Profile', () => {
    renderWithRouter(<Profile />);
    getProfile();
  });

  it('84 - Testa se há 3 botões', () => {
    renderWithRouter(<Explore />);
    getExplore();
  });

  it('85 - Testa se redireciona para receitas favorias ao clicar no botão', () => {
    const { history } = renderWithRouter(<Profile />);
    const btnFav = screen.getByTestId(testIdFavBtn);
    userEvent.click(btnFav);
    expect(history.location.pathname).toBe('/favorite-recipes');
  });

  it('86 - Testa se redireciona pra receitas feitas ao clicar em Done Recipes', () => {
    const { history } = renderWithRouter(<Profile />);
    const doneBtn = screen.getByTestId(testIdDoneBtn);
    userEvent.click(doneBtn);
    expect(history.location.pathname).toBe('/done-recipes');
  });
});
