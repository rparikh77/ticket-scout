import React from 'react';
import NBA from '../assets/NBA-Logo.png'
import NFL from '../assets/NFL-logo.png';
import { Link } from 'react-router-dom';

const Live: React.FC = () => {

  return (
    <div className='live-container'>
      <Link to='/nba'>
        <div className='nba-card'>
          <img src={NBA} alt='nba'></img>
        </div>
      </Link>
      <Link to='/nfl' >
        <div className='nfl-card'>
          <img src={NFL} alt='nfl'></img>
        </div>
      </Link>
    </div>
  )
}

export {Live};
