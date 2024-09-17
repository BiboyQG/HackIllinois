import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Points from '../Points/Points';

function EventItem({ event }) {
  return (
    <Link to={`/event/${event.eventId}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3">{event.description}</p>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <Points value={event.points} />
          <p className="text-xs sm:text-sm text-gray-500 mt-2 sm:mt-0">
            {new Date(event.startTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
            {new Date(event.endTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      </div>
    </Link>
  );
}

EventItem.propTypes = {
  event: PropTypes.shape({
    eventId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventItem;
