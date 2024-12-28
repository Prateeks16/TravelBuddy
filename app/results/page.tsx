'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ResultsPage() {
  const router = useRouter()
  const [tripPlan, setTripPlan] = useState(null)

  useEffect(() => {
    const state = router.state as any
    if (state && state.tripPlan) {
      setTripPlan(state.tripPlan)
    } else {
      router.push('/plan')
    }
  }, [router])

  const handleDownloadPDF = () => {
    // Implement PDF generation and download logic here
    console.log('Downloading PDF...')
  }

  if (!tripPlan) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-3xl font-bold text-gray-900">Your Trip to {tripPlan.destination}</h2>
          <p className="mt-1 text-sm text-gray-600">
            {tripPlan.days} days | {tripPlan.budget} budget | {tripPlan.groupSize} traveler(s)
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Itinerary</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {tripPlan.itinerary}
              </dd>
            </div>
          </dl>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium text-gray-900">Photos</h3>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {tripPlan.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Trip photo ${index + 1}`}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
        <div className="px-4 py-5 sm:px-6">
          <Button onClick={handleDownloadPDF} className="w-full">
            Download Trip Plan (PDF)
          </Button>
        </div>
      </div>
    </div>
  )
}

