import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="footer"
    >
      <Link
        to="/drinks"
      >
        <button data-testid="drinks-bottom-btn" type="button" src={ drinkIcon }>
          <img src={ drinkIcon } alt="drink-icon" />
        </button>
      </Link>
      <Link
        to="/explore"
      >
        <button data-testid="explore-bottom-btn" type="button" src={ exploreIcon }>
          <img src={ exploreIcon } alt="explore-icon" />
        </button>
      </Link>
      <Link
        to="/foods"
      >
        <button data-testid="food-bottom-btn" type="button" src={ mealIcon }>
          <img src={ mealIcon } alt="food-icon" />
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
