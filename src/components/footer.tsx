import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer-container'>
      <p>&copy; {currentYear} Ticket Scout. All rights reserved.</p>
    </footer>
  );
}

export { Footer };