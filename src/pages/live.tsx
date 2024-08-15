import React from 'react';
import NBA from '../assets/NBA-Logo.png'
import NFL from '../assets/NFL-logo.png';

const Live: React.FC = () => {
  return (
    <div className='live-container'>
      <div className='nba-card'>
        <img src={NBA}></img>
      </div>

      <div className='nfl-card'>
        <img src={NFL}></img>
      </div>
    </div>
  )
}

export {Live};
