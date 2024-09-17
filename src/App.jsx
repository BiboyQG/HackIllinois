import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchEvents, notifyFetchSuccess } from './utils';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import DaySelector from './components/DaySelector/DaySelector';
import DayPage from './components/DayPage/DayPage';
import EventDetails from './components/EventDetails/EventDetails';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(
        (data) => {
          setEvents(data.events);
          if (data.events.length > 0) {
            const firstEventDay = new Date(data.events[0].startTime * 1000).getDate();
            setSelectedDay(firstEventDay);
          }
        }
      )
      .then(notifyFetchSuccess)
  }, []);

  return (
    <Router>
      <div className="app max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <NavBar />
        <div className="py-8 mt-16 flex-grow">
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
        <Footer />
      </div>
    </Router>
  )
}

export default App
