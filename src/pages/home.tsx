import React, { useState, useEffect } from 'react';
import { searchTicketmasterEvents, Event } from '../api/ticketmaster';
import eventImages from '../api/eventImages.json';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState<Event[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [imageMap, setImageMap] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load the image map when the component mounts
    setImageMap(eventImages);
  }, []);

  const getEventImage = (eventName: string): string => {
    // Check if the event name contains any of the keywords
    const keyword = Object.keys(imageMap).find(key => 
      eventName.toLowerCase().includes(key.toLowerCase())
    );
    
    // Return the corresponding image URL or the default image
    return keyword ? imageMap[keyword] : imageMap.default;
  };

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
              <img 
                src={getEventImage(event.name)} 
                alt={event.name} 
                className='event-image'
              />
              <div className='event-details'>
                <h2>{event.name}</h2>
                <p>Date: {event.date}</p>
                <p>Venue: {event.venue}</p>
                <p>Price starting at: {event.price ? `$${event.price}` : 'N/A'}</p>
                <a href={event.url} target='_blank' rel='noopener noreferrer'>
                  <button>Buy Tickets</button>
                </a>
              </div>
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