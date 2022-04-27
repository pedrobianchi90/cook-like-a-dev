import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import Foods from '../pages/Foods';
import Login from '../pages/Login';
import Explore from '../pages/Explore';
import Details from '../pages/Details';
import FoodProgress from '../pages/FoodProgress';
import Drinks from '../pages/Drinks';
import ExploreIngredient from '../pages/ExploreIngredient';
import Nationalites from '../pages/Nationalites';
import Profile from '../pages/Profile';
import DoneRecipe from '../pages/DoneRecipe';
import FavoriteRecipe from '../pages/FavoriteRecipe';

const testIdProfileIcon = 'profile-top-btn';
const testIdSearchIcon = 'search-top-btn';
const testIdTitle = 'page-title';
const testIdInputSearch = 'search-input';

const getHeader = () => {
  const profileButton = screen.getByTestId(testIdProfileIcon);
  const title = screen.getByTestId(testIdTitle);
  const searchButton = screen.getByTestId(testIdSearchIcon);
  expect(searchButton).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(profileButton).toBeInTheDocument();
};

const noHeader = () => {
  const profileButton = screen.queryByTestId(testIdProfileIcon);
  const title = screen.queryByTestId(testIdTitle);
  const searchButton = screen.queryByTestId(testIdSearchIcon);
  expect(searchButton).not.toBeInTheDocument();
  expect(title).not.toBeInTheDocument();
  expect(profileButton).not.toBeInTheDocument();
};

const getHeaderNoSearchBtn = () => {
  const profileButton = screen.getByTestId(testIdProfileIcon);
  const searchButton = screen.queryByTestId(testIdSearchIcon);
  expect(searchButton).not.toBeInTheDocument();
  expect(profileButton).toBeInTheDocument();
};

describe('1 - Testando o componente Header', () => {
  it('9 - Testa se o header está presente na página principal de receitas', () => {
    renderWithRouter(<Foods />);
    getHeader();
  });

  describe('Testa requisito 10', () => {
    it('10.1 - Testa se o header aparece na página de Login', () => {
      renderWithRouter(<Login />);
      const profileButton = screen.queryByTestId(testIdProfileIcon);
      const title = screen.queryByTestId(testIdTitle);
      const searchButton = screen.queryByTestId(testIdSearchIcon);
      expect(searchButton).not.toBeInTheDocument();
      expect(title).not.toBeInTheDocument();
      expect(profileButton).not.toBeInTheDocument();
    });

    it('10.2 - O header tem ícones certos na tela de receitas de comidas', () => {
      renderWithRouter(<Foods />);
      getHeader();
    });

    it('10.3 - O header tem ícones corretos na tela de  receitas de bebidas ', () => {
      renderWithRouter(<Drinks />);
      getHeader();
    });
    it('10.4-5 - Não possui Header na página de Detalhes', () => {
      renderWithRouter(<Details />);
      noHeader();
    });

    it('10.6-7 - Não possui header na tela de progesso', () => {
      renderWithRouter(<FoodProgress />);
      noHeader();
    });

    it('10.8 - O header tem os ícones corretos na tela de explorar', () => {
      renderWithRouter(<Explore />);
      getHeaderNoSearchBtn();
    });

    it('10.9 - O header tem os ícones corretos na tela de explorar comidas', () => {
      renderWithRouter(<Explore />);
      const buttonExploreFoods = screen.getByRole('button', { name: /explore foods/i });
      userEvent.click(buttonExploreFoods);
      getHeaderNoSearchBtn();
    });

    it('10.10 - O header tem os ícones corretos na tela de explorar bebidas', () => {
      renderWithRouter(<Explore />);
      const buttonExploreDrinks = screen.getByRole('button', { name: /explore Drinks/i });
      userEvent.click(buttonExploreDrinks);
      getHeaderNoSearchBtn();
    });

    it('10.11-12 - Header tem ícones certos na tela de explorar ingrediente', () => {
      renderWithRouter(<ExploreIngredient />);
      getHeaderNoSearchBtn();
    });

    it('10.13 - Header tem ícones certos na tela de explorar nationalites', () => {
      renderWithRouter(<Nationalites />);
      getHeader();
    });

    it('10.14 - Header tem ícones certos na pagina de perfil', () => {
      renderWithRouter(<Profile />);
      getHeaderNoSearchBtn();
    });
    it('10.15 - header tem os ícones corretos na tela de receitas feitas', () => {
      renderWithRouter(<DoneRecipe />);
      getHeaderNoSearchBtn();
    });

    it('10.16 - header tem os ícones corretos na tela de receitas favoritas', () => {
      renderWithRouter(<FavoriteRecipe />);
      getHeaderNoSearchBtn();
    });
  });

  it('11 - Ao clicar no botão de perfil é redirecionado pro lugar correto', () => {
    const { history } = renderWithRouter(<Foods />);
    const buttonProfile = screen.getByTestId(testIdProfileIcon);
    userEvent.click(buttonProfile);
    expect(history.location.pathname).toBe('/profile');
  });

  it('12 - Ao clicar no botão de busca a barra de busca aparece, na 2 desaparece', () => {
    renderWithRouter(<Foods />);
    const searchButton = screen.getByTestId(testIdSearchIcon);
    const inputSearch = screen.queryByTestId(testIdInputSearch);
    expect(inputSearch).not.toBeInTheDocument();
    userEvent.click(searchButton);
    const inputSearchAfterFistClick = screen.queryByTestId(testIdInputSearch);
    expect(inputSearchAfterFistClick).toBeInTheDocument();
    userEvent.click(searchButton);
    const inputSearchAfterSecondClick = screen.queryByTestId(testIdInputSearch);
    expect(inputSearchAfterSecondClick).not.toBeInTheDocument();
  });
});

// tests Header
