import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import myContext from '../context/RecipeContext';
import style from '../Details.module.css';

function FooterDetails() {
  const location = useLocation();
  const myId = location.pathname.split('/')[2];
  const { recipe } = useContext(myContext);
  return (
    <Link
      to={ recipe[0].strMealThumb ? `/foods/${myId}/in-progress`
        : `/drinks/${myId}/in-progress` }
    >
      <button
        data-testid="start-recipe-btn"
        type="button"
        className={ style.footer }
      >
        StarRecipe
      </button>
    </Link>
  );
}

export default FooterDetails;