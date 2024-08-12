const API_KEY = '1yNSHGI8GuFQjTWRh7aSUqrbZ76eoBs8'; 

export interface Event {
  id: string;
  name: string;
  date: string;
  venue: string;
  url: string;
  price: number | null;
}

export const searchTicketmasterEvents = async (searchTerm: string): Promise<Event[]> => {
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchTerm}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data._embedded && data._embedded.events) {
      return data._embedded.events.map((event: any) => ({
        id: event.id,
        name: event.name,
        date: event.dates.start.localDate,
        venue: event._embedded.venues[0].name,
        url: event.url,
        price: event.priceRanges ? event.priceRanges[0].min : null,
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching Ticketmaster events:', error);
    return [];
  }
};