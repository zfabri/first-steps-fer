import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing Title',
  description: 'Pricing Description',
}

export default function PricingPage() {
  return (
    <h1 className='text-5xl'>PricingPage</h1>
  )
}