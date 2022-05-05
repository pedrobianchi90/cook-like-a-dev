import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function ListInstructionsRecomendation() {
  const { recipe } = useContext(myContext);
  return (
    <>
      <ul data-testid="instructions">
        Instruções:
        <li>{recipe[0].strInstructions}</li>
      </ul>
      <ul>
        Recomended
        <li data-testid="0-recomendation-card"> cards de recomendção...</li>
      </ul>
      { recipe[0].strMealThumb
        ? (
          <video data-testid="video" width="320" height="240" controls muted>
            <source src={ recipe[0].strYoutube } type="video/mp4" />

            Your browser does not support the video tag.
          </video>)
        : ''}
    </>
  );
}

export default ListInstructionsRecomendation;
