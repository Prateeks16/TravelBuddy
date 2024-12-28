'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GooglePlacesAutocomplete } from '@/components/google-places-autocomplete'

export default function PlanTripPage() {
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [days, setDays] = useState('')
  const [budget, setBudget] = useState('')
  const [groupSize, setGroupSize] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/loading?destination=${encodeURIComponent(destination)}&days=${days}&budget=${budget}&groupSize=${groupSize}`)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Plan Your Trip</h2>
        <div className="space-y-4">
          <GooglePlacesAutocomplete onSelect={setDestination} />
          <Input
            type="number"
            placeholder="Number of days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
          <Select onValueChange={setBudget} required>
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cheap">Cheap</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setGroupSize} required>
            <SelectTrigger>
              <SelectValue placeholder="Select group size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solo">Solo</SelectItem>
              <SelectItem value="duo">Duo</SelectItem>
              <SelectItem value="group">Group</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full">Generate Trip Plan</Button>
        </div>
      </form>
    </div>
  )
}

