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
        data-testid="drinks-bottom-btn"
      >
        { drinkIcon }
      </Link>
      <Link
        to="/explore"
        data-testid="explore-bottom-btn"
      >
        { exploreIcon }
      </Link>
      <Link
        to="/foods"
        data-testid="food-bottom-btn"
      >
        { mealIcon }
      </Link>
    </div>
  );
}

export default Footer;
