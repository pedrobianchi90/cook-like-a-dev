import React, { useContext, useEffect, useState } from 'react';
import myContext from '../context/RecipeContext';
import verifyIngredients from '../services/listIngredients';
import '../App.css';

function IngredientsDrink() {
  const {
    drinkInProgress,
    getDisableButton,
  } = useContext(myContext);

  const [checked, setChecked] = useState([]);
  const [listIngredients, setListIngredients] = useState([]);

  useEffect(() => {
    setListIngredients([...verifyIngredients(drinkInProgress)]);
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
  }, [checked]);

  const handleChange = ({ target }) => {
    if (target.checked) {
      setChecked([...checked, target.value]);
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {
          [drinkInProgress.idDrink]: [...checked, target.value],
        },
      }));
    } else {
      setChecked(checked.filter((ingred) => ingred !== target.value));
      localStorage.setItem('inProgressRecipes', JSON.stringify({
        cocktails: {
          [drinkInProgress.idDrink]:
          checked.filter((ingred) => ingred !== target.value),
        },
      }));
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
      <h3>Ingredients</h3>
      {
        listIngredients.length > 0
          ? (
            listIngredients.map((ingredient, index) => (
              <label
                key={ ingredient.ingredient }
                htmlFor="ingredients"
                data-testid={ `${index}-ingredient-step` }
                className={ isChecked(ingredient.ingredient) }
              >
                <input
                  id={ `ingredient-${index}` }
                  name={ `ingredient-${index}` }
                  type="checkbox"
                  value={ ingredient.ingredient }
                  onChange={ handleChange }
                />
                { ingredient.ingredient }
                { ingredient.measure ? ` - ${ingredient.measure}` : '' }

              </label>
            ))
          )
          : 'Carregando...'
      }
    </div>
  );
}

export default IngredientsDrink;
