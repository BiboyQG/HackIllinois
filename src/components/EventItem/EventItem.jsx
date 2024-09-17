import PropTypes from 'prop-types';

function EventItem({ event }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-3">{event.description}</p>
      <div className="flex justify-between items-center">
        <p className="text-indigo-600 font-medium">{event.points} points</p>
        <p className="text-sm text-gray-500">
          {new Date(event.startTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
          {new Date(event.endTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
}

EventItem.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
};

export default EventItem;