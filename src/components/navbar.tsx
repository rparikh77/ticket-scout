import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../assets/ticketscoutlogo.png';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className='navbar-container'>
      <Link to='/' onClick={handleLogoClick}>
        <img
          src={Logo}
          alt='logo'
          style={{ cursor: 'pointer' }}
        />
      </Link>

      <ul>
        <Link to='/live' className={`live ${location.pathname === '/live' ? 'active' : ''}`}>
          <li>Live Scores</li>
          
        </Link>
      </ul>
    </div>
  );
};

export { Navbar };