'use client';

import { Id } from '@/convex/_generated/dataModel';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { useStorageUrl } from '@/lib/utils';

const EventCard = ({ eventId }: { eventId: Id<'events'> }) => {
  const { user } = useUser();
  const router = useRouter();

  const events = useQuery(api.events.getEventById, { eventId });
  const availability = useQuery(api.events.getEventAvailability, { eventId });
  const userTicket = useQuery(api.tickets.getUserTicketForEvent, {
    eventId,
    userId: user?.id ?? '',
  });

  const queuePosition = useQuery(api.waitingList.getQueuePosition, {
    eventId,
    userId: user?.id ?? '',
  });

  const imageUrl = useStorageUrl(event?.imageStorageId);

  if (!event || !availability) {
    return null;
  }

  const isPastEvent = event.eventDate < Date.now();
  //   const isEventOwner = user?.id === event.userId;

  return (
    <div
      onClick={() => router.push(`/event/${eventId}`)}
      className={`bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer overflow-hidden relative ${
        isPastEvent ? 'opacity-75 hover:opacity-100' : ''
      }`}
    >
      events
    </div>
  );
};

export default EventCard;
