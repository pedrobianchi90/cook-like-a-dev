import React from 'react';

function Header() {
  return (
    <header>
      <button type="button" data-testid="profile-top-btn">Profile</button>
      <h2 data-testid="page-title">Food</h2>
      <button type="button">Search</button>
    </header>

  );
}

export default Header;
