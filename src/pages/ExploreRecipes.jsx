import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function ExploreRecipes() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">
          {location.pathname === '/explore/drinks' ? 'Explore Drinks' : 'Explore Foods' }
        </h2>
      </header>
    </div>
  );
}

export default ExploreRecipes;
