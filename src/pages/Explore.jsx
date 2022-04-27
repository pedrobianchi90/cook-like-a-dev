import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function Explore() {
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Explore</h2>
      </header>
      <section>
        <Link to="/explore/foods">
          <button type="button">Explore Foods</button>
        </Link>
      </section>
      <section>
        <Link to="/explore/drinks">
          <button type="button">Explore Drinks</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Explore;
