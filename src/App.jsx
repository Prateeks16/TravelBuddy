import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TripForm from './components/TripForm';
import LoadingPage from './components/LoadingPage';
import TripResult from './components/TripResult';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plan" element={<div className="container mx-auto px-4 py-8"><TripForm /></div>} />
          <Route path="/loading" element={<div className="container mx-auto px-4 py-8"><LoadingPage /></div>} />
          <Route path="/result" element={<div className="container mx-auto px-4 py-8"><TripResult /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

