import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Foods from '../pages/Foods';
import renderWithRouter from './RenderWithRouter';
import Login from '../pages/Login';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreRecipes from '../pages/ExploreRecipes';
import Nationalites from '../pages/Nationalites';
import Profile from '../pages/Profile';
import fetch from '../../cypress/mocks/fetch';
import App from '../App';

const testIdFooter = 'footer';
const testIdButtonDrinks = 'drinks-bottom-btn';
const testIdExplore = 'explore-bottom-btn';
const testIdButtonFood = 'food-bottom-btn';

const haveFooter = () => {
  const buttonFood = screen.getByTestId(testIdButtonFood);
  const buttonDrinks = screen.getByTestId(testIdButtonDrinks);
  const buttonExplore = screen.getByTestId(testIdExplore);
  const footer = screen.getByTestId(testIdFooter);
  expect(footer).toBeInTheDocument();
  expect(buttonDrinks).toBeInTheDocument();
  expect(buttonExplore).toBeInTheDocument();
  expect(buttonFood).toBeInTheDocument();
};

const noHaveFooter = () => {
  const buttonFood = screen.queryByTestId(testIdButtonFood);
  const buttonDrinks = screen.queryByTestId(testIdButtonDrinks);
  const buttonExplore = screen.queryByTestId(testIdExplore);
  const footer = screen.queryByTestId(testIdFooter);
  expect(footer).not.toBeInTheDocument();
  expect(buttonDrinks).not.toBeInTheDocument();
  expect(buttonExplore).not.toBeInTheDocument();
  expect(buttonFood).not.toBeInTheDocument();
};

afterEach(() => {
  jest.fn().mockClear();
});

describe('19 - Testando comoponent Footer', () => {
  beforeEach(() => {
    window.fetch = jest.fn(fetch);
  });
  it('19 / 21.2 - Testa se tem os testids corretos, e esta na pagina de comida', () => {
    renderWithRouter(<Foods />);
    haveFooter();
  });

  it('20.1 - Testa se o menu inferior é fixado no inferior da página', () => {
    renderWithRouter(<Foods />);
    const getFooter = screen.getByTestId(testIdFooter);
    expect(getFooter).toHaveClass('footer');
    expect(getFooter).toHaveStyle('bottom: ', '0px');
    expect(getFooter).toHaveStyle('position:', 'fixed');
  });

  it('20.2 - Testa se apresenta os ícones corretos', () => {
    renderWithRouter(<Foods />);
    const buttonFood = screen.getByTestId(testIdButtonFood);
    const buttonDrinks = screen.getByTestId(testIdButtonDrinks);
    const buttonExplore = screen.getByTestId(testIdExplore);
    expect(buttonDrinks).toHaveAttribute('src', drinkIcon);
    expect(buttonExplore).toHaveAttribute('src', exploreIcon);
    expect(buttonFood).toHaveAttribute('src', mealIcon);
  });

  it('21.1 - Testa se não tem footer na tela de login', () => {
    renderWithRouter(<Login />);
    noHaveFooter();
  });

  it('21.3 - Testa se tem footer na tela principal de bebidas', () => {
    renderWithRouter(<Drinks />);
    haveFooter();
  });

  it('21.4 - Testa se não tem footer na tela de detalhes de comida', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/foods/52977');
    });
    noHaveFooter();
  });

  it('21.5 - Testa se não tem footer na tela de detalhes daq bebida', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/drinks/178319');
    });
    noHaveFooter();
  });
  it('21.6 - Testa se não tem footer na tela de progresso de comida', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/foods/52977/in-progress');
    });
    noHaveFooter();
  });
  it('21.7 - Testa se não tem footer na tela de progresso de bebida', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/drinks/178319/in-progress');
    });
    noHaveFooter();
  });

  it('21.8 - Testa se tem footer na tela de explorar', () => {
    renderWithRouter(<Explore />);
    haveFooter();
  });

  it('21.9-10 - Testa se tem footer nas telas de explorar comidas e bebidas', () => {
    renderWithRouter(<ExploreRecipes />);
    haveFooter();
  });
  it('21.11 - Testa se tem footer nas telas de explorar por nacionalidade', () => {
    renderWithRouter(<Nationalites />);
    haveFooter();
  });
  it('21.12 - Testa se tem footer na tela de perfil', () => {
    renderWithRouter(<Profile />);
    haveFooter();
  });
  it('21.13 - Testa se tem footer na tela de receitas feitas', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/done-recipes');
    });
    noHaveFooter();
  });
  it('21.14 - Testa se tem footer na tela de receitas favoritas', async () => {
    await act(async () => {
      const { history } = renderWithRouter(<App />);
      history.push('/favorite-recipes');
    });
    noHaveFooter();
  });

  it('22 - Testa se redireciona para pagina correta clicando no icone de bebidas', () => {
    const { history } = renderWithRouter(<Foods />);
    const buttonDrinks = screen.getByTestId(testIdButtonDrinks);
    userEvent.click(buttonDrinks);
    expect(history.location.pathname).toEqual('/drinks');
  });
  it('23- Testa se redireciona para pagina correta clicando no icone de explorar', () => {
    const { history } = renderWithRouter(<Foods />);
    const buttonExplore = screen.getByTestId(testIdExplore);
    userEvent.click(buttonExplore);
    expect(history.location.pathname).toEqual('/explore');
  });
  it('24 - Testa se redireciona para pagina correta clicando no icone de comidas', () => {
    const { history } = renderWithRouter(<Foods />);
    const buttonFood = screen.getByTestId(testIdButtonFood);
    userEvent.click(buttonFood);
    expect(history.location.pathname).toEqual('/foods');
  });
});
