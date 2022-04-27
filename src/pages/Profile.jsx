import React from 'react';
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
    </div>
  );
}

export default Profile;
