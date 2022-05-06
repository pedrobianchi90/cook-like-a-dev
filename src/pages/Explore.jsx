import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import '../style/HeaderStyle.css';

function Explore() {
  return (
    <div>
      <header className="header-container">
        <Link to="/profile">
          <button type="button" className="icons-header">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Explore</h2>
        <MdTravelExplore className="icons-header" size="48px" />
      </header>
      <section>
        <Link to="/explore/foods">
          <button type="button" data-testid="explore-foods">Explore Foods</button>
        </Link>
      </section>
      <section>
        <Link to="/explore/drinks">
          <button type="button" data-testid="explore-drinks">Explore Drinks</button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}

export default Explore;
