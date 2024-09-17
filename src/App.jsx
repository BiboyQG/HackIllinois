import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchEvents, notifyFetchSuccess } from './utils';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import DaySelector from './components/DaySelector/DaySelector';
import DayPage from './components/DayPage/DayPage';
import EventDetails from './components/EventDetails/EventDetails';

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
    <Router>
      <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar />
        <div className="py-8 mt-16">
          <Routes>
            <Route path="/" element={
              <div className="flex">
                <div className="w-[25%] pr-4">
                  <DaySelector 
                    events={events} 
                    selectedDay={selectedDay} 
                    onDaySelect={setSelectedDay} 
                  />
                </div>
                <div className="w-[75%] pl-4">
                  <DayPage selectedDay={selectedDay} events={events} />
                </div>
              </div>
            } />
            <Route path="/event/:eventId" element={<EventDetails events={events} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
