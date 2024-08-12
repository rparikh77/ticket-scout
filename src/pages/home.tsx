import React, { useState } from 'react';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventDate, setEventDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add logic here to search for events using searchTerm and eventDate
    console.log('Searching for:', searchTerm, eventDate);
  };

  return (
    <div className='home-container'>

      
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for events'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-bar'
        />
        <input
          type='date'
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className='date-picker'
        />
        <button type='submit' className='search-button'>Search</button>
      </form>
    </div>
  );
}

export { Home };
