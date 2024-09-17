import PropTypes from 'prop-types';

function DaySelector({ events, selectedDay, onDaySelect }) {
  const earliestEvent = events.reduce((earliest, event) => 
    event.startTime < earliest.startTime ? event : earliest
  , events[0] || { startTime: Date.now() / 1000 });

  const eventDate = new Date(earliestEvent.startTime * 1000);
  const year = eventDate.getFullYear();
  const month = eventDate.getMonth();
  const currentMonth = eventDate.toLocaleString('default', { month: 'long' });

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = [...Array(getDaysInMonth(year, month)).keys()].map(i => i + 1);

  const handleDayClick = (day) => {
    onDaySelect(day);
  };

  return (
    <div className="solid-bg rounded-lg shadow-md p-5 mb-6 sticky top-20">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{currentMonth}</h2>
      <div className="grid grid-cols-7 gap-2">
        {daysInMonth.map(day => {
          const hasEvent = events.some(event => new Date(event.startTime * 1000).getDate() === day);
          const isSelected = selectedDay === day;

          return (
            <button
              key={day}
              className={`
                w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                ${hasEvent ? 'hover:bg-indigo-100 cursor-pointer' : 'cursor-default text-gray-400'}
                ${isSelected ? 'bg-indigo-600 text-white' : 'bg-gray-100'}
                ${hasEvent && !isSelected ? 'text-indigo-600' : ''}
              `}
              onClick={hasEvent ? () => handleDayClick(day) : null}
              disabled={!hasEvent}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

DaySelector.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    eventId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    startTime: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  })).isRequired,
  selectedDay: PropTypes.number.isRequired,
  onDaySelect: PropTypes.func.isRequired,
};

export default DaySelector;
