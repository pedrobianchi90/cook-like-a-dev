import React, { useContext } from 'react';
import myContext from '../context/RecipeContext';
import '../style/DetailsStyle.css';

function ListIngredientDetails() {
  const { recipe } = useContext(myContext);
  return (
    <div className="list-details-container">
      <h4 className="list-details-ingredient">Ingredients</h4>
      <div>
        <ul>
          <li data-testid="0-ingredient-name-and-measure">
            {`${recipe[0].strIngredient1} - ${recipe[0].strMeasure1}`}
          </li>
          { recipe[0].strIngredient2 && (
            <li data-testid="1-ingredient-name-and-measure">
              {`${recipe[0].strIngredient2} - ${recipe[0].strMeasure2}`}
            </li>)}

          { recipe[0].strIngredient3 && (
            <li data-testid="2-ingredient-name-and-measure">
              {`${recipe[0].strIngredient3} - ${recipe[0].strMeasure3}`}
            </li>)}
          { recipe[0].strIngredient4 && (
            <li data-testid="3-ingredient-name-and-measure">
              {`${recipe[0].strIngredient4} - ${recipe[0].strMeasure4}`}
            </li>)}
          { recipe[0].strIngredient5 && (
            <li data-testid="4-ingredient-name-and-measure">
              {`${recipe[0].strIngredient5} - ${recipe[0].strMeasure5}`}
            </li>)}
          { recipe[0].strIngredient6 && (
            <li data-testid="5-ingredient-name-and-measure">
              {`${recipe[0].strIngredient6} - ${recipe[0].strMeasure6}`}
            </li>)}
          { recipe[0].strIngredient7 && (
            <li data-testid="6-ingredient-name-and-measure">
              {`${recipe[0].strIngredient7} - ${recipe[0].strMeasure7}`}
            </li>)}
          { recipe[0].strIngredient8 && (
            <li data-testid="7-ingredient-name-and-measure">
              {`${recipe[0].strIngredient8} - ${recipe[0].strMeasure8}`}
            </li>)}
          { recipe[0].strIngredient9 && (
            <li data-testid="8-ingredient-name-and-measure">
              {`${recipe[0].strIngredient9} - ${recipe[0].strMeasure9}`}
            </li>)}
          { recipe[0].strIngredient10 && (
            <li data-testid="9-ingredient-name-and-measure">
              {`${recipe[0].strIngredient10} - ${recipe[0].strMeasure10}`}
            </li>)}
          { recipe[0].strIngredient11 && (
            <li data-testid="10-ingredient-name-and-measure">
              {`${recipe[0].strIngredient11} - ${recipe[0].strMeasure11}`}
            </li>)}
          { recipe[0].strIngredient12 && (
            <li data-testid="11-ingredient-name-and-measure">
              {`${recipe[0].strIngredient12} - ${recipe[0].strMeasure12}`}
            </li>)}
          { recipe[0].strIngredient13 && (
            <li data-testid="12-ingredient-name-and-measure">
              {`${recipe[0].strIngredient13} - ${recipe[0].strMeasure13}`}
            </li>)}
          { recipe[0].strIngredient14 && (
            <li data-testid="13-ingredient-name-and-measure">
              {`${recipe[0].strIngredient14} - ${recipe[0].strMeasure14}`}
            </li>)}
          { recipe[0].strIngredient15 && (
            <li data-testid="14-ingredient-name-and-measure">
              {`${recipe[0].strIngredient15} - ${recipe[0].strMeasure15}`}
            </li>)}
        </ul>
      </div>
    </div>
  );
}

export default ListIngredientDetails;
