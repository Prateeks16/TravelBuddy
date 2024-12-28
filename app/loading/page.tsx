'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoadingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const generateTripPlan = async () => {
      const destination = searchParams.get('destination')
      const days = searchParams.get('days')
      const budget = searchParams.get('budget')
      const groupSize = searchParams.get('groupSize')

      try {
        const response = await fetch('/api/generate-trip-plan', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ destination, days, budget, groupSize }),
        })

        if (response.ok) {
          const tripPlan = await response.json()
          router.push('/results', { state: { tripPlan } })
        } else {
          throw new Error('Failed to generate trip plan')
        }
      } catch (error) {
        console.error('Error generating trip plan:', error)
        router.push('/error')
      }
    }

    generateTripPlan()
  }, [router, searchParams])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Generating Your Trip Plan</h2>
        <p className="text-gray-600 mb-8">Please wait while we create your personalized itinerary...</p>
        <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

