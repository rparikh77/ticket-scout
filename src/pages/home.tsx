import React, { useState } from 'react';
import { searchTicketmasterEvents, Event } from '../api/ticketmaster';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    setHasSearched(true);
    try {
      const fetchedEvents = await searchTicketmasterEvents(searchTerm);
      setEvents(fetchedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    }
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
        <button type='submit' className='search-button'>Search</button>
      </form>

      <div className='event-results'>
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className='event-item'>
              <h2>{event.name}</h2>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
              <p>Price starting at: {event.price ? `$${event.price}` : 'N/A'}</p>
              <a href={event.url} target='_blank' rel='noopener noreferrer'>
                <button>Buy Tickets</button>
              </a>
            </div>
          ))
        ) : hasSearched ? (
          <p className='noevent'>No events found.</p>
        ) : null}
      </div>
    </div>
  );
}

export { Home };