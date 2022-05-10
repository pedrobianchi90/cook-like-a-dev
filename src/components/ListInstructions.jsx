import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';

function ListInstructionsRecomendation() {
  const { recipe } = useContext(myContext);
  return (
    <div className="list-details-container">
      <h4 className="list-details-ingredient">Instructions</h4>
      <ul data-testid="instructions">
        <li className="list-details-instructions">{recipe[0].strInstructions}</li>
      </ul>
      <h4 className="list-details-ingredient">Recomended</h4>
      <ul>
        <li data-testid="0-recomendation-card"> cards de recomendção...</li>
      </ul>
      { recipe[0].strMealThumb
        ? (
          <div className="video-details">
            <video
              data-testid="video"
              width="320"
              height="240"
              controls
              muted
              className="video"
            >
              <source src={ recipe[0].strYoutube } type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>)
        : ''}
    </div>
  );
}

export default ListInstructionsRecomendation;
