'use client'

import { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'

interface GooglePlacesAutocompleteProps {
  onSelect: (place: string) => void
}

export function GooglePlacesAutocomplete({ onSelect }: GooglePlacesAutocompleteProps) {
  const [inputValue, setInputValue] = useState('')
  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script')
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initializeAutocomplete
      document.body.appendChild(script)
    }

    loadGoogleMapsScript()
  }, [])

  const initializeAutocomplete = () => {
    if (inputRef.current) {
      autoCompleteRef.current = new google.maps.places.Autocomplete(inputRef.current)
      autoCompleteRef.current.addListener('place_changed', handlePlaceSelect)
    }
  }

  const handlePlaceSelect = () => {
    if (autoCompleteRef.current) {
      const place = autoCompleteRef.current.getPlace()
      if (place.formatted_address) {
        setInputValue(place.formatted_address)
        onSelect(place.formatted_address)
      }
    }
  }

  return (
    <Input
      ref={inputRef}
      type="text"
      placeholder="Enter destination"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      required
    />
  )
}

