import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { generateTripPlan } from '../services/geminiService';

function LoadingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTripPlan = async () => {
      try {
        const tripPlan = await generateTripPlan(location.state);
        navigate('/result', { state: { tripPlan } });
      } catch (error) {
        console.error('Error generating trip plan:', error);
        setError('Failed to generate trip plan. Please try again.');
      }
    };

    fetchTripPlan();
  }, [location.state, navigate]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <h2 className="text-2xl font-bold text-red-600 mb-4">{error}</h2>
        <button
          onClick={() => navigate('/plan')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
        >
          Back to Trip Planner
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500 mb-8"></div>
        <h2 className="text-3xl font-bold text-indigo-800 mb-4">Crafting Your Perfect Trip</h2>
        <p className="text-xl text-indigo-600">Our AI is working its magic to create your personalized itinerary...</p>
      </div>
    </div>
  );
}

export default LoadingPage;

