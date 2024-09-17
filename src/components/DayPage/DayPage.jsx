import PropTypes from 'prop-types';
import EventList from '../EventList/EventList';
import AniCon from '../AniCon/AniCon';

function DayPage({ selectedDay, events }) {
  const filteredEvents = events
    .filter(event => new Date(event.startTime * 1000).getDate() === selectedDay)
    .sort((a, b) => a.startTime - b.startTime);

  const currentMonth = filteredEvents.length > 0
    ? new Date(filteredEvents[0].startTime * 1000).toLocaleString('default', { month: 'long' })
    : '';

  return (
    <AniCon>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Events for {currentMonth ? `${currentMonth} ${selectedDay}` : 'this day'}
          </h2>
          {filteredEvents.length > 0 ? (
            <EventList events={filteredEvents} />
          ) : (
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-8 text-center">
              <p className="text-lg sm:text-xl text-gray-600">Fetching events...</p>
            </div>
          )}
        </div>
      </div>
    </AniCon>
  );
}

DayPage.propTypes = {
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