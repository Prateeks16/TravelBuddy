import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
      <p className="text-xl mb-8">We couldn't generate your trip plan. Please try again.</p>
      <Link href="/plan">
        <Button>Back to Trip Planner</Button>
      </Link>
    </div>
  )
}

