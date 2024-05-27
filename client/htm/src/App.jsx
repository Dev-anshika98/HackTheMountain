
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Homepage';
import CountdownTimer from './components/CountdownTimer';
import EventSchedule from './components/EventSchedule';
import RegistrationForm from './components/RegistrationForm';
// import './App.css'

function App() {
  const targetDate = '2024-06-01T00:00:00';

  return (
    <div className='bg-black'>
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <header className="text-center py-4">
          <h1 className="sr-only">Hack The Mountains</h1>
        </header>
        <div className="container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/event" element={<EventSchedule />} />
            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
