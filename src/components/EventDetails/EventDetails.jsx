import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AniCon from '../AniCon/AniCon';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { FaCalendarAlt, FaClock, FaStar, FaBuilding, FaTag, FaSync } from 'react-icons/fa';

function EventDetails({ events }) {
  const { eventId } = useParams();
  const event = events.find(e => e.eventId === eventId);

  if (!event) {
    return <div className="text-center text-2xl text-gray-600 mt-10">Event not found</div>;
  }

  // Format date and time for AddToCalendarButton
  const startDate = new Date(event.startTime * 1000);
  const endDate = new Date(event.endTime * 1000);
  const formatDate = (date) => date.toISOString().split('T')[0];
  const formatTime = (date) => date.toTimeString().split(' ')[0].slice(0, 5);

  return (
    <AniCon>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">{event.name}</h2>
        <p className="text-gray-600 mb-8 text-lg">{event.description}</p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <DetailItem icon={<FaCalendarAlt />} label="Date" value={startDate.toLocaleDateString()} />
            <DetailItem icon={<FaClock />} label="Time" value={`${startDate.toLocaleTimeString()} - ${endDate.toLocaleTimeString()}`} />
            <DetailItem icon={<FaStar />} label="Points" value={event.points} />
          </div>
          <div className="space-y-4">
            <DetailItem icon={<FaBuilding />} label="Sponsor" value={event.sponsor || 'N/A'} />
            <DetailItem icon={<FaTag />} label="Event Type" value={event.eventType} />
            <DetailItem icon={<FaSync />} label="Async" value={event.isAsync ? 'Yes' : 'No'} />
          </div>
        </div>
        
        {event.mapImageUrl && (
          <img src={event.mapImageUrl} alt="Event Location Map" className="w-full mb-8 rounded-lg shadow-md" />
        )}
        
        <div className="flex flex-col items-center space-y-6">
          <AddToCalendarButton
            className="transition-all duration-300 transform hover:scale-105"
            name={event.name}
            options={['Apple', 'Google', "Outlook.com"]}
            location={event.location || 'TBA'}
            startDate={formatDate(startDate)}
            endDate={formatDate(endDate)}
            startTime={formatTime(startDate)}
            endTime={formatTime(endDate)}
            timeZone="America/Los_Angeles"
            trigger="click"
            hideBackground={true}
          />
          <Link to="/" className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 text-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Return to Main Page
          </Link>
        </div>
      </div>
    </AniCon>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-indigo-600">{icon}</span>
      <span className="font-semibold">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

DetailItem.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

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