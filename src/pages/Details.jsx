import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ListIngredientDetails from '../components/ListIngredientsDetails';
import myContext from '../context/RecipeContext';
import HeaderDetails from '../components/HeaderDetails';
import ListInstructionsRecomendation from '../components/ListInstructions';
import FooterDetails from '../components/FooterDetails';

function Details() {
  const location = useLocation();
  const myId = location.pathname.split('/')[2];
  const typeRecipe = location.pathname.split('/')[1].split('s')[0];

  const { getRecipe } = useContext(myContext);

  useEffect(() => {
    getRecipe(typeRecipe, myId);
  }, [typeRecipe, myId]);

  return (
    <div>
      <HeaderDetails />
      <ListIngredientDetails />
      <ListInstructionsRecomendation />
      <section>
        <FooterDetails />
      </section>
    </div>
  );
}

export default Details;
