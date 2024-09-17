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
    <div className="app">
      <DaySelector 
        events={events} 
        selectedDay={selectedDay} 
        onDaySelect={setSelectedDay} 
      />
      <DayPage selectedDay={selectedDay} events={events} />
    </div>
  )
}

export default App
