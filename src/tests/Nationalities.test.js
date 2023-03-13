// import React from 'react';
// import { screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// import renderWithRouter from './RenderWithRouter';
// import Nationalites from '../pages/Nationalites';
// // import App from '../App';

// // const dropdownBtn = 'explore-by-nationality-dropdown';
// const imageLength = 27;

// describe.only('Testa a página de busca por nacionalidade', () => {
//   it('78 - Testa se aparecem todos os cards em todas as nacionalidades', () => {
//     renderWithRouter(<Nationalites />);
//     // const dropdown = screen.getByTestId('explore-by-nationality-dropdown');
//     // userEvent.click(dropdown);
//     // const all = screen.getByRole('option', { name: 'All' });
//     // expect(all.selected).toBe(true);
//     // userEvent.selectOptions(screen.getByRole('option', { name: 'American' }));
//     // const american = screen.getByRole('option', { name: 'American' });
//     // userEvent.click(american);
//     // const images = screen.getByRole('img');
//     // expect(images.length).toBe(imageLength);
//     // const british = screen.getByRole('option', { name: 'British' });
//     // userEvent.click(british);
//     // expect(images.length).toBe(imageLength);
//     expect(screen.getByRole('option')).toBeInTheDocument();
//   });

//   // it('should correctly set default option', () => {
//   //   render(<App />)
//   //   expect(screen.getByRole('option', { name: 'Select a country' }).selected).toBe(true)
//   // })
//   //
//   // it('79 - Testa se ao dropdown funciona corretamente', () => {
//   //   renderWithRouter(<Nationalites />);
//   //   const dropdown = screen.getByTestId(dropdownBtn);
//   //   userEvent.click(dropdown);
//   //   const american = screen.getByRole('option', { name: 'American' });
//   //   userEvent.click(american);
//   //   const images = screen.getByRole('img');
//   //   expect(images.length).toBe(imageLength);
//   //   const bubbleAndSqueak = screen.getByText('Bubble & Squeak');
//   //   expect(bubbleAndSqueak).toBeInTheDocument();
//   //   const bubbleAndSqueakImage = screen.getByTestId('0-card-img');
//   //   userEvent.click(bubbleAndSqueakImage);
//   //   const title = getByText('Bubble & Squeak');
//   //   expect(title).toBeInTheDocument();
//   // });
//   // it('80 - Testa se o botão All traz todas as opções sem filtros', () => {
//   //   renderWithRouter(<Nationalites />);
//   //   const dropdown = screen.queryByTestId(dropdownBtn);
//   //   userEvent.click(dropdown);
//   //   const all = screen.getByRole('option', { name: 'All' });
//   //   userEvent.click(all);
//   //   const corba = screen.getByText('Corba');
//   //   expect(corba).toBeInTheDocument();
//   //   const burek = screen.getByText('Burek');
//   //   expect(burek).toBeInTheDocument();
//   // });
//   // it('81 -Testa que a rota /explore/drinks/nationalities não existe', () => {
//   //   renderWithRouter(<App />, { route: '/explore/drinks/nationalitiesh' });
//   //   const title = screen.getAllByRole(heading);
//   //   expect(title).not.toBeInTheDocument();
//   // });
// });
