import { useState, useEffect } from 'react'
import { fetchEvents, notifyFetchSuccess } from './utils';
import './App.css'
import DaySelector from './components/DaySelector/DaySelector';
import DayPage from './components/DayPage/DayPage';

function App() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(
        (data) => {
          setEvents(data.events);
        }
      )
      .then(notifyFetchSuccess)
  }, []);

  return (
    <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
        <DaySelector 
          events={events} 
          selectedDay={selectedDay} 
          onDaySelect={setSelectedDay} 
        />
        <DayPage selectedDay={selectedDay} events={events} />
      </div>
    </div>
  )
}

export default App
