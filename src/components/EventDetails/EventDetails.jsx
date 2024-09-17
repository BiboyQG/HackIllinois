import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function EventDetails({ events }) {
  const { eventId } = useParams();
  const event = events.find(e => e.eventId === eventId);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p><strong>Start Time:</strong> {new Date(event.startTime * 1000).toLocaleString()}</p>
          <p><strong>End Time:</strong> {new Date(event.endTime * 1000).toLocaleString()}</p>
          <p><strong>Points:</strong> {event.points}</p>
        </div>
        <div>
          <p><strong>Sponsor:</strong> {event.sponsor || 'N/A'}</p>
          <p><strong>Event Type:</strong> {event.eventType}</p>
          <p><strong>Async:</strong> {event.isAsync ? 'Yes' : 'No'}</p>
        </div>
      </div>
      {event.mapImageUrl && (
        <img src={event.mapImageUrl} alt="Event Location Map" className="w-full mb-4 rounded-lg" />
      )}
      <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
        Return to Main Page
      </Link>
    </div>
  );
}

EventDetails.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
    sponsor: PropTypes.string,
    eventType: PropTypes.string.isRequired,
    isAsync: PropTypes.bool.isRequired,
    mapImageUrl: PropTypes.string,
  })).isRequired,
};

export default EventDetails;