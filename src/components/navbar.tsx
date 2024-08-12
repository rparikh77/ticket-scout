import React from 'react';
import Logo from '../assets/ticketscoutlogo.png';
import '../styles/navbar.css';


const Navbar: React.FC = () => {
  return (
    <div className='navbar-container'>
        <img src={Logo} alt='logo'></img>
    </div>
  )
}

export {Navbar};
