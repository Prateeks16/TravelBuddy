import { NextResponse } from 'next/server'
import { generateText } from 'ai'
import { openai } from '@ai-sdk/openai'

export async function POST(req: Request) {
  const { destination, days, budget, groupSize } = await req.json()

  try {
    const prompt = `Generate a detailed ${days}-day trip plan for ${destination} with a ${budget} budget for a ${groupSize} traveler(s). Include recommendations for transportation, accommodations, activities, and dining. Provide estimated costs and links to booking websites where applicable.`

    const { text } = await generateText({
      model: openai('gpt-4o'),
      prompt: prompt,
    })

    // Here you would typically process the generated text and fetch images from Google Photos API
    // For this example, we'll return a simplified response

    const tripPlan = {
      destination,
      days,
      budget,
      groupSize,
      itinerary: text,
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ],
    }

    return NextResponse.json(tripPlan)
  } catch (error) {
    console.error('Error generating trip plan:', error)
    return NextResponse.json({ error: 'Failed to generate trip plan' }, { status: 500 })
  }
}

