import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div data-testid="footer">
      <Link
        to="/drinks"
      >
        <button data-testid="drinks-bottom-btn" type="button">
          <img src={ drinkIcon } alt="drink-icon" />
        </button>
      </Link>
      <Link
        to="/explore"
      >
        <button data-testid="explore-bottom-btn" type="button">
          <img src={ exploreIcon } alt="explore-icon" />
        </button>
      </Link>
      <Link
        to="/foods"
      >
        <button data-testid="food-bottom-btn" type="button">
          <img src={ mealIcon } alt="food-icon" />
        </button>
      </Link>
    </div>
  );
}

export default Footer;
