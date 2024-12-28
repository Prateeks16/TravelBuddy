import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Travel background"
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>
      <div className="z-10 text-center px-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in-down">
          AI Trip Planner
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in-up">
          Experience the future of travel planning with our AI-powered itinerary creator. Your perfect trip is just a click away!
        </p>
        <Link
          to="/plan"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-xl font-semibold hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate-pulse inline-block"
        >
          Plan Your Trip
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

