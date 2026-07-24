import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import GuestPage from './components/GuestPage';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Logout from './components/Logout';

const flights = [
  { id: 1, name: 'Air Express 101', route: 'NYC to LA', time: '10:00 AM' },
  { id: 2, name: 'Sky Jet 203', route: 'Chicago to Miami', time: '2:30 PM' },
  { id: 3, name: 'Cloud Nine 307', route: 'San Francisco to Seattle', time: '6:45 PM' }
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setMessage('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setMessage('');
  };

  const handleBookTicket = () => {
    setMessage('Ticket Booked Successfully');
  };

  const actionButton = isAuthenticated ? (
    <Logout onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );

  let pageContent;
  if (isAuthenticated) {
    pageContent = <UserPage flights={flights} onBook={handleBookTicket} message={message} />;
  } else {
    pageContent = <GuestPage flights={flights} />;
  }

  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        {actionButton}
        {pageContent}
      </div>
    </div>
  );
}

export default App;
