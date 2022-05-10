import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/RecipeContext';
import verifyIngredients from '../services/listIngredients';
import '../App.css';
import '../style/DetailsStyle.css';

import {
  inicialStorage,
  readProgressRecipe,
  updateProgressRecipe,
  verifyRecipe,
} from '../helper/storageProgressRecipes';

function IngredientsDrink() {
  const {
    inProgress,
    getDisableButton,
  } = useContext(myContext);

  const [listIngredients, setListIngredients] = useState([]);

  inicialStorage(inProgress);

  // objeto para identificar o tipo da receita
  const objRecipe = verifyRecipe(inProgress);

  const [checked, setChecked] = useState(
    readProgressRecipe()[objRecipe.type][objRecipe.recipeId],
  );

  useEffect(() => {
    setListIngredients([...verifyIngredients(inProgress)]);
  }, []);

  useEffect(() => {
    if (listIngredients.length > 0) {
      const allIngredients = [...listIngredients];
      if (allIngredients.length === checked.length) {
        getDisableButton(false);
      } else {
        getDisableButton(true);
      }
    }
  });

  const handleChange = ({ target }) => {
    if (target.checked) {
      setChecked([...checked, target.value]);
      updateProgressRecipe({
        [objRecipe.type]: {
          [objRecipe.recipeId]:
              [...checked, target.value],
        },
      });
    } else {
      setChecked(checked.filter((ingred) => ingred !== target.value));
      updateProgressRecipe({
        [objRecipe.type]: {
          [objRecipe.recipeId]:
            checked
              .filter((ingred) => ingred !== target.value),
        },
      });
    }
  };

  const isChecked = (ingredDone) => {
    if (checked.includes(ingredDone)) {
      return 'checked';
    }
    return 'not-checked';
  };

  return (
    <div>
      <div className="list-details-ingredient-title">
        <h4 className="list-details-ingredient-progress">Ingredients</h4>
      </div>
      {
        listIngredients.length > 0
          ? (
            listIngredients.map((ingredient, index) => (
              <div className="input-progress" key={ ingredient.ingredient }>
                <label
                  key={ ingredient.ingredient }
                  htmlFor={ `ingredient-${index}` }
                  data-testid={ `${index}-ingredient-step` }
                  className={ isChecked(ingredient.ingredient) }
                >
                  <input
                    id={ `ingredient-${index}` }
                    name={ `ingredient-${index}` }
                    type="checkbox"
                    checked={ isChecked(ingredient.ingredient) === 'checked' }
                    value={ ingredient.ingredient }
                    onChange={ handleChange }
                    className="input-progress-checkbox"
                  />
                  { ingredient.ingredient }
                  { ingredient.measure ? ` - ${ingredient.measure}` : '' }

                </label>
              </div>
            ))
          )
          : 'Carregando...'
      }
    </div>
  );
}

export default IngredientsDrink;
