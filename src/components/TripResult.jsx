import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function TripResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const tripPlan = location.state?.tripPlan;

  if (!tripPlan) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
        <h2 className="text-2xl font-bold text-red-600 mb-4">No trip plan found. Please try again.</h2>
        <button
          onClick={() => navigate('/plan')}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition duration-300"
        >
          Back to Trip Planner
        </button>
      </div>
    );
  }

  const downloadPDF = () => {
    const element = document.getElementById('trip-plan-content');
    html2pdf().from(element).save('trip-plan.pdf');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-6 py-8 bg-indigo-600 text-white">
          <h2 className="text-3xl font-bold">Your Trip Plan</h2>
        </div>
        <div id="trip-plan-content" className="p-6 space-y-8">
          <div dangerouslySetInnerHTML={{ __html: tripPlan.html }} />
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t">
          <button
            onClick={downloadPDF}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105"
          >
            Download Trip Plan (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripResult;

