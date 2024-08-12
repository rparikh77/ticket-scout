import React, { useState } from 'react';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
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

      <div className='event-results'>
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className='event-item'>
              <h2>{event.name}</h2>
              <p>{event.dates.start.localDate}</p>
              <p>{event._embedded.venues[0].name}</p>
              <a href={event.url} target='_blank' rel='noopener noreferrer'>More Info</a>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
}

export { Home };
