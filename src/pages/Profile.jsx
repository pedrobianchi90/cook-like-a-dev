import React from 'react';
import Footer from '../components/Footer';
import profileIcon from '../images/profileIcon.svg';

function Profile() {
  return (
    <div>
      <header>
        <button type="button">
          <img src={ profileIcon } alt="logo-profile" data-testid="profile-top-btn" />
        </button>
        <h2 data-testid="page-title">Profile</h2>
      </header>
      <Footer />
    </div>
  );
}

export default Profile;
