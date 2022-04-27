import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import SearchBar from '../components/SearchBar';
// import myContext from '../context/RecipeContext';

function Foods() {
  const [state, setState] = useState(false);
  // const { foodsData } = useContext(myContext);
  return (
    <div>
      <header>
        <Link to="/profile">
          <button type="button">
            <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
          </button>
        </Link>
        <h2 data-testid="page-title">Foods</h2>
        <button type="button" onClick={ () => setState(!state) }>
          <img src={ searchIcon } alt="logo-search" data-testid="search-top-btn" />
        </button>
      </header>
      <div />
      { state && <SearchBar />}
      {/* && <input data-testid="search-input" type="text" placeholder="Search Recipe" /> */}
      <Footer />
    </div>
  );
}

export default Foods;
