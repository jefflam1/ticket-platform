'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import Spinner from './Spinner';
import { CalendarDays, Ticket } from 'lucide-react';
import EventCard from './EventCard';

const EventList = () => {
  const events = useQuery(api.events.getAllEvents);
  console.log('events', events);

  if (!events) {
    return (
      <div className='flex justify-center items-center min-h-[400px]'>
        <Spinner />
      </div>
    );
  }

  const upcomingEvents = events
    .filter((event) => event.eventDate > Date.now())
    .sort((a, b) => a.eventDate - b.eventDate);

  const pastEvents = events
    .filter((event) => event.eventDate < Date.now())
    .sort((a, b) => b.eventDate - a.eventDate);

  return (
    <div className='max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-3xl font-bold text-title'>Upcoming Events</h1>
          <p className='mt-2 text-content'>
            Discover & book tickets for amazing events
          </p>
        </div>
        <div className='bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100'>
          <div className='flex items-center gap-2 text-content'>
            <CalendarDays className='w-5 h-5' />
            <span className='font-medium'>
              {upcomingEvents?.length ?? 0} Upcoming Events
            </span>
          </div>
        </div>
      </div>

      {/* Upcoming Events Grid */}

      {upcomingEvents.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {upcomingEvents?.map((event) => (
            <EventCard key={event._id} eventId={event._id} />
          ))}
        </div>
      ) : (
        <div className='bg-gray-50 rounded-lg p-12 text-center mb-12'>
          <Ticket />
          <h3 className='text-lg font-medium text-gray-900'>
            No upcoming events found
          </h3>
          <p className='text-gray-600 mt-1'>
            Check back later for upcoming events
          </p>
        </div>
      )}

      {/* Past events section */}
      {pastEvents.length > 0 && (
        <>
          <h2 className='text-2xl font-bold text-gray-900 mb-6'>Past Events</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {pastEvents?.map((event) => (
              <EventCard key={event._id} eventId={event._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EventList;
