import React from 'react';
import { screen, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from '../../cypress/mocks/fetch';
import renderWithRouter from './RenderWithRouter';
import Foods from '../pages/Foods';

const testIdIconSearch = 'search-top-btn';

const appearSearchBar = () => {
  const iconSearch = screen.getByTestId(testIdIconSearch);
  userEvent.click(iconSearch);
};

afterEach(() => {
  jest.fn().mockClear();
});

beforeEach(() => {
  window.fetch = jest.fn(fetch);
});

describe('13 - Testando o componente SearchBar', () => {
  it('13 - Testa se possui os test id corretos na página', () => {
    renderWithRouter(<Foods />);
    appearSearchBar();
    const inputSearch = screen.getByTestId('search-input');
    const radioButtonByIngredient = screen.getByTestId('ingredient-search-radio');
    const radioButtonByName = screen.getByTestId('name-search-radio');
    const radioButtonByFisrtLetter = screen.getByTestId('first-letter-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');
    expect(radioButtonByIngredient).toBeInTheDocument();
    expect(radioButtonByName).toBeInTheDocument();
    expect(radioButtonByFisrtLetter).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
    expect(inputSearch).toBeInTheDocument();
  });

  it('14.1 - Testa se o filtro por ingrediente é feito corretamente  ', async () => {
    renderWithRouter(<Foods />);
    appearSearchBar();
    const radioButtonByIngredient = screen.getByTestId('ingredient-search-radio');
    const searchInput = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('exec-search-btn');
    userEvent.type(searchInput, 'tomato');
    userEvent.click(radioButtonByIngredient);
    userEvent.click(buttonSearch);
    await waitForElement(
      () => expect(screen.queryAllByText('Carregando...')).toHaveLength(0),
      { timeout: 5000 },
    );
    const titleFirstMeal = screen.getByTestId('0-card-name');
    expect(titleFirstMeal).toHaveTextContent(/Brown Stew Chicken/i);
  });
});
