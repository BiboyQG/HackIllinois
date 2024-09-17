import PropTypes from 'prop-types';
import EventItem from '../EventItem/EventItem';

function EventList({ events }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Events</h2>
      <div className="space-y-4">
        {events.map(event => (
          <EventItem key={event.eventId} event={event} />
        ))}
      </div>
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  })).isRequired,
};

export default EventList;
