import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { SiCodechef } from 'react-icons/si';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';
import '../style/HeaderStyle.css';
import '../style/ProfileStyle.css';

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
    <section>
      <header className="header-container">
        <button type="button" className="icons-header">
          <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title" className="title-header">Profile</h2>
        <ImProfile className="icons-header" size="48px" />
      </header>
      <div className="bttn-container-profile">
        <button
          type="button"
          data-testid="profile-favorite-btn"
          id="fav-btn"
          onClick={ handleFav }
          className="bttn-profile"
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-done-btn"
          id="done-btn"
          onClick={ handleDone }
          className="bttn-profile"
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          id="logout-btn"
          onClick={ handleLogout }
          className="bttn-profile"
        >
          Logout
        </button>
      </div>
      <div className="profile-form">
        <SiCodechef size={ 60 } className="logo-chef" />
        <p
          data-testid="profile-email"
          id="profile-email"
          className="email-user"
        >
          { getEmail ? ` EMAIL: ${getEmail.email}` : '' }
        </p>
        <label htmlFor="name-input" className="profile-label">
          Name:
          <input type="text" id="name-input" className="profile-input" />
        </label>
        <label htmlFor="date-input" className="profile-label">
          Date of birth
          <input type="date" id="date-input" className="profile-input" />
        </label>
        <label htmlFor="gender-input" className="profile-label">
          Gender:
          <select className="profile-input">
            <option>Female</option>
            <option>Male</option>
          </select>
        </label>
        <label htmlFor="address-input" className="profile-label">
          Address:
          <input type="text" id="address-input" className="profile-input" />
        </label>
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
