import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import Foods from '../pages/Foods';

describe('9 - Testando o componente Header', () => {
  it('9 - Testa se o header está presente na página principal de receitas', () => {
    renderWithRouter(<Foods />);
    const profileButton = screen.getByTestId('profile-top-btn');
    const title = screen.getByTestId('page-title');
    const searchButton = screen.getByTestId('search-top-btn');

    expect(searchButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
  });
});
