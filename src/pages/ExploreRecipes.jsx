import React from 'react';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';

function ExploreRecipes() {
  const location = useLocation();
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
      <Footer />
    </div>
  );
}

export default ExploreRecipes;
