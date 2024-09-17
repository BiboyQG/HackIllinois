import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';

function DayPage({ selectedDay, events, currentMonth}) {
  const filteredEvents = events.filter(event => new Date(event.startTime * 1000).getDate() === selectedDay);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          Events for {currentMonth} {selectedDay}
        </h2>
        {filteredEvents.length > 0 ? (
          <EventList events={filteredEvents} />
        ) : (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 text-center">
            <p className="text-lg sm:text-xl text-gray-600">No events scheduled for this day</p>
          </div>
        )}
      </div>
    </div>
  );
}

DayPage.propTypes = {
  currentMonth: PropTypes.string.isRequired,
  selectedDay: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    eventId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  })).isRequired,
};

export default DayPage;