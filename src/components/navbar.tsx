import React from 'react';
import Logo from '../assets/ticketscoutlogo.png';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className='navbar-container'>
      <img
        src={Logo}
        alt='logo'
        className='navbar-logo'
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export { Navbar };