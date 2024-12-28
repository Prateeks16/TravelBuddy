import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function generateTripPlan(tripDetails) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Create a detailed travel plan for a ${tripDetails.travelPartner} trip to ${tripDetails.destination} for ${tripDetails.days} days with a ${tripDetails.budget} budget. Format the response in clean HTML with the following sections:

1. Travel Recommendations:
- List 3-4 recommended airlines with estimated costs
- If applicable, include 2-3 train options with costs and duration
- Best times to travel
- Direct vs layover options for flights

2. Hotel Recommendations:
- 3-4 options with different price points
- Include star ratings and key amenities
- Location highlights
- Price per night

3. Daily Itinerary:
- Day-by-day breakdown
- Must-see attractions
- Estimated time at each location
- Best times to visit
- Entry fees if applicable

4. Local Transportation:
- Best ways to get around
- Public transport options
- Taxi/ride-sharing estimates
- Walking/cycling possibilities

5. Dining Recommendations:
- Must-try local dishes
- Restaurant recommendations for each meal
- Price ranges
- Popular food districts

6. Budget Breakdown:
- Detailed cost estimates for all categories
- Daily spending recommendations
- Money-saving tips
- Emergency fund suggestions

Use bullet points and clear formatting. Include approximate costs in INR. Provide links to booking options for flights, trains, hotels, and activities where applicable. Wrap all links with a span tag with class "text-blue-600 hover:underline" for highlighting. Example: <span class="text-blue-600 hover:underline"><a href="...">Link text</a></span>

Style the HTML output with the following CSS classes:
- Use "text-2xl font-bold mb-4 text-indigo-800" for main section headings
- Use "text-xl font-semibold mb-2 text-indigo-600" for subsection headings
- Use "mb-4" for paragraph spacing
- Use "list-disc pl-6 space-y-2" for unordered lists
- Use "border-b border-gray-200 pb-4 mb-4" for section dividers

Wrap each main section in a div with class "bg-white rounded-lg shadow-md p-6 mb-6".`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const tripPlan = response.text();
    
    return { html: tripPlan };
  } catch (error) {
    console.error("Error generating trip plan:", error);
    throw error;
  }
}

