import React from 'react';
import Logo from '../assets/ticketscoutlogo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={Logo} alt='logo' className='navbar-logo' />
      </Link>
    </div>
  )
}

export { Navbar };