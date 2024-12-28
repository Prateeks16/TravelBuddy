import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-8">AI Trip Planner</h1>
      <p className="text-xl mb-8">Plan your perfect trip with the power of AI</p>
      <Link href="/plan">
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
          Plan Your Trip
        </Button>
      </Link>
    </div>
  )
}

