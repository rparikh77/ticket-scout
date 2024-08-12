import React, { useState } from 'react';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    const apiKey = '1yNSHGI8GuFQjTWRh7aSUqrbZ76eoBs8'; // Replace with your actual API key
    const formattedDate = eventDate ? `&startDateTime=${eventDate}T00:00:00Z` : '';
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}${formattedDate}&apikey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data._embedded && data._embedded.events) {
        setEvents(data._embedded.events);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
  };

  return (
    <div className='home-container'>
      <h1>Search Events</h1>
      
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