import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import '../style/HeaderStyle.css';

function Profile() {
  const history = useHistory();

  const handleFav = () => {
    history.push('favorite-recipes');
  };

  const handleDone = () => {
    history.push('done-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const getEmail = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <header className="header-container">
        <button type="button" className="icons-header">
          <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title" className="title-header">Profile</h2>
        <ImProfile className="icons-header" size="48px" />
      </header>

      <section>
        <p
          data-testid="profile-email"
          id="profile-email"
        >
          { getEmail ? getEmail.email : '' }
        </p>

        <button
          type="button"
          data-testid="profile-favorite-btn"
          id="fav-btn"
          onClick={ handleFav }
        >
          Favorite Recipes
        </button>

        <button
          type="button"
          data-testid="profile-done-btn"
          id="done-btn"
          onClick={ handleDone }
        >
          Done Recipes
        </button>

        <button
          type="button"
          data-testid="profile-logout-btn"
          id="logout-btn"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
