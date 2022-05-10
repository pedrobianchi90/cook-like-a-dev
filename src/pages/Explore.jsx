import React from 'react';
import { Link } from 'react-router-dom';
import { MdTravelExplore } from 'react-icons/md';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import '../style/HeaderStyle.css';
import '../style/ExploreStyle.css';

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
      <div className="bttn-container-explore">
        <Link to="/explore/foods" className="link">
          <button
            type="button"
            data-testid="explore-foods"
            className="bttn-explore"
          >
            Explore Foods
          </button>
        </Link>
        <Link to="/explore/drinks" className="link">
          <button
            type="button"
            data-testid="explore-drinks"
            className="bttn-explore"
          >
            Explore Drinks
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
