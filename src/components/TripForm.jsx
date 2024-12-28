import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TripForm() {
  const [destination, setDestination] = useState('');
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState('moderate');
  const [travelPartner, setTravelPartner] = useState('solo');
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.onload = initAutocomplete;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function initAutocomplete() {
    const input = document.getElementById('destination');
    new window.google.maps.places.Autocomplete(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/loading', { state: { destination, days, budget, travelPartner } });
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Plan Your Trip</h2>
        <div className="mb-6">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-2">Number of Days</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
          <select
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="cheap">Budget-friendly</option>
            <option value="moderate">Moderate</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="travelPartner" className="block text-sm font-medium text-gray-700 mb-2">Travel Partner</label>
          <select
            id="travelPartner"
            value={travelPartner}
            onChange={(e) => setTravelPartner(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="solo">Solo</option>
            <option value="duo">Duo</option>
            <option value="group">Group</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Generate Trip Plan
        </button>
      </form>
    </div>
  );
}

export default TripForm;

