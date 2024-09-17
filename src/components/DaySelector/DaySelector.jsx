import PropTypes from 'prop-types';

function DaySelector({ events, selectedDay, onDaySelect }) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = [...Array(getDaysInMonth(year, month)).keys()].map(i => i + 1);

  const handleDayClick = (day) => {
    onDaySelect(day);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Day</h2>
      <div className="grid grid-cols-7 gap-2 sm:gap-4">
        {daysInMonth.map(day => {
          const hasEvent = events.some(event => new Date(event.startTime * 1000).getDate() === day);
          const isSelected = selectedDay === day;

          return (
            <button
              key={day}
              className={`
                w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium
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
